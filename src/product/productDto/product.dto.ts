import { Timestamp } from "typeorm";

export class ProductDto{
    id : number;
    productId : string;
    productName : string;
    productQuantity : number;
    productPrice : number;
    createdOn : Timestamp;
    updatedOn : Timestamp
}