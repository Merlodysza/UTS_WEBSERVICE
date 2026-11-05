import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { KaryawanService } from './karyawan.service';

@Controller('karyawan')
export class KaryawanController {
    constructor(private readonly karyawanService: KaryawanService) { }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return {
            message: 'Data karyawan berhasil ditemukan',
            data: await this.karyawanService.findOne(id),
        };
    }
}