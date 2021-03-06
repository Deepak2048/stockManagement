import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { productModule } from './product/product.module';
import { Product } from './product/productEntity/product.entity';
import { purchaseModule } from './purchase/purchase.module';
import { Purchase } from './purchase/purchaseEntity/purchase.Entity';

import { salesModule } from './sales/sales.module';
import { Sales } from './sales/salesEntity/sales.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      entities: [Sales, Product, Purchase],
      synchronize: true,
    }),
    salesModule,productModule,purchaseModule

  ]
})
export class AppModule {}
