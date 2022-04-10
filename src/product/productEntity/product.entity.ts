import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id : number;
    
    @Column()
    productId : string;

    @Column()
    productName : string;

    @Column()
    productQuantity : number;

    @Column()
    productPrice : number;

    @Column({type : Date, nullable:true})
    createdOn : Timestamp;

    @Column({type : Date, nullable:true})
    updatedOn : Timestamp
}