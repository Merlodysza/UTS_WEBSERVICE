import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class AbsensiType {
    @Field(() => Int)
    id: number;

    @Field(() => Int)
    karyawanId: number;

    @Field(() => String)
    tanggal: string;

    @Field(() => String)
    jamMasuk: string;

    @Field(() => String, { nullable: true })
    jamKeluar?: string;

    @Field(() => String)
    status: string;

    @Field(() => String, { name: 'status_kehadiran' })
    statusKehadiran: string;
}

@ObjectType()
export class PenjualanType {
    @Field(() => Int)
    id: number;

    @Field(() => Int)
    karyawanId: number;

    @Field(() => String)
    tanggal: string;

    @Field(() => Float)
    total: number;

    @Field(() => String, { nullable: true })
    keterangan?: string;
}

@ObjectType()
export class KaryawanType {
    @Field(() => Int)
    id: number;

    @Field(() => String)
    nama: string;

    @Field(() => String)
    jabatan: string;

    @Field(() => String)
    email: string;

    @Field(() => Float, { name: 'total_pendapatan' })
    totalPendapatan: number;

    @Field(() => [AbsensiType])
    absensi: AbsensiType[];

    @Field(() => [PenjualanType])
    penjualan: PenjualanType[];
}