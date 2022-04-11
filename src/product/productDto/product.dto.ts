import { Validate } from "class-validator";
import { Timestamp, Unique } from "typeorm";
import { Product } from "../productEntity/product.entity";

export class ProductDto{
    id : number;
    @Validate(Unique, [Product])
    productId : string;
    productName : string;
    productQuantity : number;
    productPrice : number;
    createdOn : Date;
    updatedOn : Timestamp
}