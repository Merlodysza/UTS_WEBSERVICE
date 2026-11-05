import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePenjualanDto } from './dto/create-penjualan.dto';

@Injectable()
export class PenjualanService {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreatePenjualanDto) {
        return this.prisma.penjualan.create({
            data: {
                karyawanId: data.karyawanId,
                total: data.total_pendapatan,
                tanggal: new Date(data.tanggal_transaksi),
                keterangan: 'Penjualan UTS NIM 004',
            },
        });
    }
}