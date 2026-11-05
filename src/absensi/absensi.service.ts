import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AbsensiService {
    constructor(private readonly prisma: PrismaService) { }

    async findAll() {
        return this.prisma.absensi.findMany({
            include: {
                karyawan: true,
            },
            orderBy: {
                tanggal: 'desc',
            },
        });
    }

    async create(data: {
        karyawanId: number;
        tanggal: string;
        jamMasuk: string;
        jamKeluar?: string;
        status: string;
    }) {
        return this.prisma.absensi.create({
            data: {
                karyawanId: data.karyawanId,
                tanggal: new Date(data.tanggal),
                jamMasuk: data.jamMasuk,
                jamKeluar: data.jamKeluar,
                status: data.status,
            },
        });
    }
}