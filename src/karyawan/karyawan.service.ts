import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class KaryawanService {
    constructor(private readonly prisma: PrismaService) { }

    async findOne(id: number) {
        const karyawan = await this.prisma.karyawan.findUnique({
            where: {
                id: id,
            },
            include: {
                absensi: true,
                penjualan: true,
            },
        });

        if (!karyawan) {
            throw new NotFoundException('Data karyawan tidak ditemukan');
        }

        return karyawan;
    }
}