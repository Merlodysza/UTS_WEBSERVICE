import { Body, Controller, Post } from '@nestjs/common';
import { PenjualanService } from './penjualan.service';
import { CreatePenjualanDto } from './dto/create-penjualan.dto';

@Controller('penjualan')
export class PenjualanController {
    constructor(private readonly penjualanService: PenjualanService) { }

    @Post()
    async create(@Body() data: CreatePenjualanDto) {
        return {
            message: 'Data penjualan berhasil ditambahkan',
            data: await this.penjualanService.create(data),
        };
    }
}