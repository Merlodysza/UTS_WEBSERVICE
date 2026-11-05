import {
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsDateString,
    Min,
} from 'class-validator';

export class CreatePenjualanDto {
    @IsNotEmpty({ message: 'ID karyawan wajib diisi' })
    @IsInt({ message: 'ID karyawan harus berupa angka bulat' })
    @Min(1, { message: 'ID karyawan minimal 1' })
    karyawanId: number;

    @IsNotEmpty({ message: 'Total pendapatan wajib diisi' })
    @IsNumber(
        {},
        { message: 'Total pendapatan harus berupa angka' },
    )
    @Min(0, { message: 'Total pendapatan minimal 0' })
    total_pendapatan: number;

    @IsNotEmpty({ message: 'Tanggal transaksi wajib diisi' })
    @IsDateString(
        {},
        { message: 'Tanggal transaksi harus menggunakan format ISO' },
    )
    tanggal_transaksi: string;
}