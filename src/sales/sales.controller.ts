import { Body, Controller,  Delete,  Get,  HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ProductDto } from "src/product/productDto/product.dto";
import { Product } from "src/product/productEntity/product.entity";
import { SalesService } from "../sales/sales.service";
import { SalesDto, UpdateSalesDto } from "./salesDto/sales.Dto";
import { Sales } from "./salesEntity/sales.entity";

@Controller('sales')
export class SalesController{
    constructor(private salesService : SalesService) {}
    @Post()
    async create(@Body() salesData : SalesDto){
        const data = await this.salesService.create(salesData)
        return {
            message : " Sales data inserted successfully",
            statusCode: HttpStatus.OK,
            success : true,
            data
        }
    }

    @Get()
    async findAll(){
        const data = await this.salesService.findAll()
        return {
            message : "Your all, Sales data Listed successfully ",
            statusCode: HttpStatus.OK,
            success : true,
            data
        }
    }

    @Get(':productId')
    async find(@Param('productId') productId : string){
        const data = await this.salesService.findById(productId)
        return {
            message : " Sales data Listed successfully by productId",
            statusCode: HttpStatus.OK,
            success : true,
            data
        }
    }

    @Put(':productId')
    async updateSales(@Param('productId') productId : string,@Body() updateData : UpdateSalesDto, productData: Product){
        const updatedData = await this.salesService.update(productId, updateData);
        return {
            message : " Sales data updated successfully by productId",
            statusCode: HttpStatus.OK,
            success : true
        }
    }
    

    @Delete(':productId')
    async delete(@Param('producrId') productId : string){
        const deletedData = await this.salesService.destory(productId)
        return {
            message : "Deleated sales data successfully..........",
            statusCode : HttpStatus.OK,
            success : true
        }
    }
}