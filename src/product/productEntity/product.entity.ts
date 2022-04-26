import { Purchase } from "src/purchase/purchaseEntity/purchase.Entity";
import { BeforeInsert, Column, Entity, JoinColumn, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";

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

    @Column({type : Date, nullable:true})
    updatedOn : Timestamp;

    @ManyToMany(() => Product , (purchase) => purchase.product , {cascade: ["insert","update"]})
    @JoinColumn()
    purchase : Purchase[]
    product: any;
}