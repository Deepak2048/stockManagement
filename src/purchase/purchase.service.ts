import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductDto } from "src/product/productDto/product.dto";
import { Product } from "src/product/productEntity/product.entity";
import { Repository } from "typeorm";
import { PurchaseDto, UpdatePurchaseDto } from "./purchaseDto/purchase.Dto";
import { Purchase } from "./purchaseEntity/purchase.Entity";

@Injectable()
export class PurchaseService{
    constructor(
        @InjectRepository(Purchase) private purchaseRepository : Repository<Purchase>,
        @InjectRepository(Product) private productRepository : Repository<Product>
    ) {}
    

    async createPurchase(purchaseDto :PurchaseDto) :Promise<any>{
        const purchaseIteam : Purchase = await this.purchaseRepository.create({
            purchaseId: purchaseDto.purchaseId,
            productName: purchaseDto.productName,
            quantity: purchaseDto.quantity,
            price: purchaseDto.price,
            purchaseOn: new Date()
        });
        
        const productData = await this.productRepository.findOne(purchaseDto.purchaseId);
        console.log(productData.productId);
        console.log(productData.productId == purchaseDto.purchaseId);
        
        if(productData.productId == purchaseDto.purchaseId){
            productData.quantity = productData.quantity + purchaseDto.quantity;
            console.log(productData.quantity);
            await this.productRepository.save(productData)
        }else{
            console.log("insert to product table");
            (ProductDto);
        (productDto : ProductDto)=>{
            const productIteam : Product =  this.productRepository.create({
                productId: productDto.productId,
                productName: productDto.productName,
                quantity: productDto.quantity,
                price: productDto.price,
                createdOn: new Date()
            });
            return  this.productRepository.save(productIteam);
        }
        
        //     (productDto:ProductDto) =>{const productIteam : Product = await this.productRepository.create({
        //         productId: productDto.productId,
        //         productName: productDto.productName,
        //         quantity: productDto.quantity,
        //         price: productDto.price,
        //         purchaseOn: new Date()
        //     });
        //     await this.productRepository.save(productIteam)
        // }
            
        }

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
        purchaseInput.quantity = updateDto.quantity;
        purchaseInput.price = updateDto.price;
        purchaseInput.purchaseOn = new Date();
        purchaseInput.updatedOn = new Date()

        this.purchaseRepository.save(purchaseInput)
        return purchaseInput;

    }

    async dastory(purchaseId : string) :Promise<any>{
        return await this.purchaseRepository.delete({purchaseId:purchaseId})
    }
}

function getProductData(productId: any, String: StringConstructor) {
    throw new Error("Function not implemented.");
}
