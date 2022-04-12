import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { PurchaseService } from "./purchase.service";
import { PurchaseDto, UpdatePurchaseDto } from "./purchaseDto/purchase.Dto";
import { Purchase } from "./purchaseEntity/purchase.Entity";

@Controller('purchase')
export class PurchaseController{
 constructor(private purchaseService :PurchaseService) {}

 @Post()
 async createPurchase(@Body() pruchaseDto : PurchaseDto): Promise<any>{
     const data =  await this.purchaseService.createPurchase(pruchaseDto);
     return {
        message : "Purchase data inserted successfuly",
         ststusCode :HttpStatus.CREATED,
         success : true,
         data
     }
 }
@Get()
async finaAll():Promise<any>{
    const allData = await this.purchaseService.findAll()
    return {
        message : "Purchase all data are listed successfuly",
         ststusCode :HttpStatus.OK,
         success : true,
         allData
     }

}
@Get(':purchaseId')
async findById(@Param('purchaseId') purchaseId : string) :Promise<any>{
    const data = await this.purchaseService.findById(purchaseId);
    return {
        message : "Purchase data are listed successfuly",
         ststusCode :HttpStatus.OK,
         success : true,
         data
     }
}

@Put(':purchaseId')
async updatePurchase(@Param('purchaseId') purchaseId : string, @Body() updateDto :UpdatePurchaseDto) :Promise<any>{
    const data = await this.purchaseService.updatePurchase(purchaseId,updateDto);
    return {
        message : "Purchase data are updated successfuly",
         ststusCode :HttpStatus.OK,
         success : true,
         data
     }
    
}

@Delete(':prurchaseId')
async destory(@Param('purchaseId') purchaseId : string) {
    const deleteData = await this.purchaseService.dastory(purchaseId);
    return {
        message : "Deleted data successfuly",
         ststusCode :HttpStatus.OK,
         success : true,
         deleteData
     }
}

}