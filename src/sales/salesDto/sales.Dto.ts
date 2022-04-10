import { Timestamp } from "typeorm";

export class SalesDto{
    id : number;
    productId : string;
    productName : string;
    productQuantity : number;
    salesPrice : number;
    salesOn : Date;
    updatedOn : Date
   
}