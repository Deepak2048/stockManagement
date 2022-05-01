import { Timestamp } from "typeorm";

export class SalesDto{
    productId : string;
    productName : string;
    quantity : number;
    price : number;
    salesOn : Date
   
}

export class UpdateSalesDto {
    productId : string;
    productName : string;
    quantity : number;
    price : number;
    updatedOn : Date
}