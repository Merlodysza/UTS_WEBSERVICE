import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { KaryawanService } from '../karyawan.service';
import { KaryawanType } from './karyawan.type';

@Resolver(() => KaryawanType)
export class KaryawanResolver {
    constructor(
        private readonly karyawanService: KaryawanService,
    ) { }

    @Query(() => KaryawanType, { name: 'karyawan' })
    async getKaryawan(
        @Args('id', { type: () => Int }) id: number,
    ) {
        const data = await this.karyawanService.findOne(id);

        const totalPendapatan = data.penjualan.reduce(
            (total, item) => total + item.total,
            0,
        );

        return {
            ...data,
            totalPendapatan,
            absensi: data.absensi.map((item) => ({
                ...item,
                tanggal: item.tanggal.toISOString(),
                statusKehadiran: item.status,
            })),
            penjualan: data.penjualan.map((item) => ({
                ...item,
                tanggal: item.tanggal.toISOString(),
            })),
        };
    }
}