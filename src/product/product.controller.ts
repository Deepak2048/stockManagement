import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ProductService } from "../product/product.service";
import { ProductDto } from "./productDto/product.dto";

@Controller('product')
export class ProductController  {
    constructor(private productService : ProductService ){} 
    @Post()
    async create(@Body() productDto : ProductDto){
        const insertData = await this.productService.createProduct(productDto);

        return{
            message : "Product data inserted successfully",
            statusCode : HttpStatus.CREATED,
            success : true,
            insertData
        }
    }

    @Get()
    async findAll(@Body() productDto : ProductDto){
        const allData = await this.productService.findAllProduct();
        return {
            message : "All product Data listed successfully ",
            statusCode : HttpStatus.OK,
            success : true,
            allData
        }
    }

    @Get(':productId')
    async find(@Param('productId') productId : string){
        const data = await this.productService.findById(productId);
        return{
            message : "Data listed successfully ",
            statusCode : HttpStatus.OK,
            success : true,
            data
        }
    }

    @Put(':productId')
    async updateP(@Param('productId') productId : string, @Body() partialData : Partial<ProductDto>){
        const updateData = await this.productService.productUpdate(productId, partialData);
        return{
            message : " Product Data updated successfully ",
            statusCode : HttpStatus.OK,
            success : true,
            updateData
        }
    }

    @Delete(':productId')
    async delete(@Param('productId') productId : string){
        const deleteData = await this.productService.destory(productId);
        return{
            message : "Product data deleted successfully",
            statusCode : HttpStatus.OK,
            success : true,
            deleteData
        }
    }
}