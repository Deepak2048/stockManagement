import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { PurchaseService } from "./purchase.service";
import { PurchaseDto } from "./purchaseDto/purchase.Dto";
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
}