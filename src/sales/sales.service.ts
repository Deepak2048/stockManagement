import { Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/product/productEntity/product.entity";
import { Repository } from "typeorm";
import { SalesDto, UpdateSalesDto } from "./salesDto/sales.Dto";
import { Sales } from "./salesEntity/sales.entity";

@Injectable()
export class SalesService{
    constructor (
        @InjectRepository(Product) private productRepository : Repository<Product>,
        @InjectRepository(Sales) private salesRepository : Repository<Sales>
        
    ) {}

    async create(salesData : SalesDto):Promise<any>{
        const salesInput :Sales = this.salesRepository.create({
            productId:salesData.productId,
            productName: salesData.productName,
            quantity:salesData.quantity,
            price: salesData.price,
            salesOn: new Date()
        });

        const productData = await this.productRepository.findOne(salesData.productId);
        console.log(productData.productId);
        console.log(productData.productId == salesData.productId);
        
        if(productData.productId == salesData.productId){
            productData.quantity = productData.quantity + salesData.quantity;
            console.log(productData.quantity);
            await this.productRepository.save(productData)
        }
        
         
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
         salesInput.quantity = updateData.quantity;
         salesInput.price = updateData.price;
         salesInput.updatedOn = new Date()
         this.salesRepository.save(salesInput)
         
        //  console.log(productData.productQuantity - updateData.salesQuantity);
         
         return salesInput;
    } 

    async destory(productId : string) : Promise<any>{
        return await this.salesRepository.delete({productId});;
    }
}