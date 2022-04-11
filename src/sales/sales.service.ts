import { Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductDto } from "src/product/productDto/product.dto";
import { Product } from "src/product/productEntity/product.entity";
import { Repository } from "typeorm";
import { SalesDto, UpdateSalesDto } from "./salesDto/sales.Dto";
import { Sales } from "./salesEntity/sales.entity";

@Injectable()
export class SalesService{
    constructor (@InjectRepository(Sales) private salesRepository : Repository<Sales>) {}

    async create(salesData : SalesDto):Promise<Sales>{
        const salesInput :Sales = this.salesRepository.create({
            productId:salesData.productId,
            productName: salesData.productName,
            salesQuantity:salesData.salesQuantity,
            salesPrice: salesData.salesPrice,
            salesOn: new Date()
        })
        
         
         return await this.salesRepository.save(salesInput);;
    } 

    
    async findAll(): Promise<Sales[]>{
        return await this.salesRepository.find()
    }

    async findById(productId : string): Promise<Sales>{
        return await this.salesRepository.findOne({productId})
    }
    
    async update(productId : string, updateData : UpdateSalesDto) : Promise<Sales>{
         const salesInput: Sales = await this.salesRepository.findOne(productId);
         salesInput.productId = updateData.productId;
         salesInput.productName = updateData.productName;
         salesInput.salesQuantity = updateData.salesQuantity;
         salesInput.salesPrice = updateData.salesPrice;
         salesInput.updatedOn = new Date()
         this.salesRepository.save(salesInput)
         
        //  console.log(productData.productQuantity - updateData.salesQuantity);
         
         return salesInput;
    } 

    async destory(productId : string) : Promise<any>{
        return await this.salesRepository.delete({productId});;
    }
}