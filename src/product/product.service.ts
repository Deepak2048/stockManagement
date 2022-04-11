import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductDto } from "./productDto/product.dto";
import { Product } from "./productEntity/product.entity";

@Injectable()
export class ProductService{
    constructor(@InjectRepository(Product) private productRepository : Repository<Product>) {}

    async createProduct(productDto : ProductDto):Promise<ProductDto> {
        return await this.productRepository.save(productDto);
    }

    async findAllProduct() : Promise<ProductDto[]>{
        return await this.productRepository.find();
    }

    async findById(productId : string):Promise<ProductDto>{
        return await this.productRepository.findOne({productId})
    }

    async productUpdate(productId : string, partialData : Partial<ProductDto>): Promise<any>{
        console.log(partialData);
        
        return await this.productRepository.update({productId}, partialData )
    }

    async destory(productId: string) :Promise<any>{
        return await this.productRepository.delete({productId})
    }
}