import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { PrismaModule } from './prisma/prisma.module';
import { PenjualanModule } from './penjualan/penjualan.module';
import { AbsensiModule } from './absensi/absensi.module';
import { KaryawanModule } from './karyawan/karyawan.module';

@Module({
  imports: [
    PrismaModule,
    PenjualanModule,
    AbsensiModule,
    KaryawanModule,

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      path: '/graphql',
    }),
  ],
})
export class AppModule { }