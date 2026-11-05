import { Body, Controller, Get, Post } from '@nestjs/common';
import { AbsensiService } from './absensi.service';

@Controller('absensi')
export class AbsensiController {
    constructor(private readonly absensiService: AbsensiService) { }

    @Get()
    async findAll() {
        return {
            message: 'Data absensi berhasil ditampilkan',
            data: await this.absensiService.findAll(),
        };
    }

    @Post()
    async create(
        @Body()
        data: {
            karyawanId: number;
            tanggal: string;
            jamMasuk: string;
            jamKeluar?: string;
            status: string;
        },
    ) {
        return {
            message: 'Data absensi berhasil ditambahkan',
            data: await this.absensiService.create(data),
        };
    }
}