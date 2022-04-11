import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PurchaseController } from "./purchase.controller";
import { PurchaseService } from "./purchase.service";
import { Purchase } from "./purchaseEntity/purchase.Entity";

@Module({
    imports:[TypeOrmModule.forFeature([Purchase])],
    controllers:[PurchaseController],
    providers:[PurchaseService]
})

export class purchaseModule {}