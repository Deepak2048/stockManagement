import { Purchase } from "src/purchase/purchaseEntity/purchase.Entity";
import { BeforeInsert, Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Product{
    product: any;
    static productId(productId: any) {
        throw new Error("Method not implemented.");
    }
    @PrimaryGeneratedColumn()
    productId : string;

    @Column()
    productName : string;

    @Column()
    quantity : number;

    @Column()
    price : number;

    @Column({type :  'timestamp with time zone', nullable:true})
    createdOn : Date;

    @Column({type : Date, nullable:true})
    updatedOn : Timestamp;

    @OneToMany(() => Product , (purchase) => purchase.product , {cascade: ["insert","update"]})
    purchase : Purchase[];
    
}