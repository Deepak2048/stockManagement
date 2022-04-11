import { Timestamp } from "typeorm";

export class SalesDto{
    id : number;
    productId : string;
    productName : string;
    salesQuantity : number;
    salesPrice : number;
    salesOn : Date
   
}

export class UpdateSalesDto {
    id : number;
    productId : string;
    productName : string;
    salesQuantity : number;
    salesPrice : number;
    updatedOn : Date
}