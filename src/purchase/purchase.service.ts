import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PurchaseDto } from "./purchaseDto/purchase.Dto";
import { Purchase } from "./purchaseEntity/purchase.Entity";

@Injectable()
export class PurchaseService{
    constructor(@InjectRepository(Purchase) private purchaseRepository : Repository<Purchase>) {}

    async createPurchase(purchaseDto :PurchaseDto) :Promise<Purchase>{
        const purchaseIteam : Purchase = await this.purchaseRepository.create({
            purchaseId: purchaseDto.purchaseId,
            productName: purchaseDto.productName,
            purchaseQuantity: purchaseDto.purchaseQuantity,
            purchasePrice: purchaseDto.purchasePrice,
            purchaseOn: new Date()
        })

        this.purchaseRepository.save(purchaseIteam)
        return purchaseIteam;
    }
}