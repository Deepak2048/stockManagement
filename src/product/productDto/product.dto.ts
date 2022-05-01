import { Validate } from "class-validator";
import { Timestamp, Unique } from "typeorm";
import { Product } from "../productEntity/product.entity";

export class ProductDto{
    productId : string;
    productName : string;
    quantity : number;
    price : number;
    createdOn : Date;
    updatedOn : Timestamp
}