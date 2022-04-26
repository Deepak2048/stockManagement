import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PurchaseDto, UpdatePurchaseDto } from "./purchaseDto/purchase.Dto";
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

    async findAll():Promise<Purchase[]>{
        return await this.purchaseRepository.find()
    }

    async findById(purchaseId : string) :Promise<Purchase>{
        return await this.purchaseRepository.findOne({purchaseId:purchaseId})
    }

    async updatePurchase(purchaseId : string, updateDto : UpdatePurchaseDto) : Promise<Purchase>{
        const purchaseInput : Purchase = await this.purchaseRepository.findOne({purchaseId : purchaseId})
        
        purchaseInput.purchaseId = updateDto.purchaseId;
        purchaseInput.productName = updateDto.productName;
        purchaseInput.purchaseQuantity = updateDto.purchaseQuantity;
        purchaseInput.purchasePrice = updateDto.purchasePrice;
        purchaseInput.purchaseOn = new Date();
        purchaseInput.updatedOn = new Date()

        this.purchaseRepository.save(purchaseInput)
        return purchaseInput;

    }

    async dastory(purchaseId : string) :Promise<any>{
        return await this.purchaseRepository.delete({purchaseId:purchaseId})
    }
}