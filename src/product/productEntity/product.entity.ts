import { BeforeInsert, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id : number;
    
    @PrimaryColumn({unique:true})
    productId : string;

    @Column()
    productName : string;

    @Column()
    productQuantity : number;

    @Column()
    productPrice : number;

    @Column({type :  'timestamp with time zone', nullable:true})
    createdOn : Date;

    @BeforeInsert()


    @Column({type : Date, nullable:true})
    updatedOn : Timestamp
}