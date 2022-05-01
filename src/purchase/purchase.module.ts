import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/product/productEntity/product.entity";
import { PurchaseController } from "./purchase.controller";
import { PurchaseService } from "./purchase.service";
import { Purchase } from "./purchaseEntity/purchase.Entity";

@Module({
    imports:[TypeOrmModule.forFeature([Purchase, Product])],
    controllers:[PurchaseController],
    providers:[PurchaseService]
})

export class purchaseModule {}