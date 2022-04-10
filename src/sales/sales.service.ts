import { Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SalesDto } from "./salesDto/sales.Dto";
import { Sales } from "./salesEntity/sales.entity";

@Injectable()
export class SalesService{
    constructor (@InjectRepository(Sales) private salesRepository : Repository<Sales>) {}

    async create(salesData : SalesDto):Promise<SalesDto>{
        const user = this.salesRepository.create(salesData)
        
         await this.salesRepository.save(salesData);
         return user;
    }
    
    async findAll(): Promise<SalesDto[]>{
        return await this.salesRepository.find()
    }

    async findById(productId : string): Promise<SalesDto>{
        return await this.salesRepository.findOne({productId})
    }
    
    async update(productId : string, updateData : Partial<SalesDto>) : Promise<SalesDto>{
         await this.salesRepository.update({productId},updateData)
         return await this.salesRepository.findOne({productId})
    } 

    async destory(productId : string) : Promise<any>{
        return await this.salesRepository.delete({productId});;
    }
}