import { productModule } from "src/product/product.module";
import { Product } from "src/product/productEntity/product.entity";
import { Column, Entity, JoinColumn, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Purchase {
    @PrimaryGeneratedColumn()
    purchaseId : string;

    @Column()
    productName : string;

    @Column({type:"integer"})
    quantity : number;

    @Column({type:"numeric"})
    price : number;

    
    productId : string;

    @Column({type:'timestamp with time zone', nullable:false})
    purchaseOn : Date;

    @Column({type:'timestamp with time zone', nullable:true})
    updatedOn : Date;

    @ManyToMany(() => Product , (product) => product.purchase , {cascade: ["insert","update"]})
    @JoinColumn()
    product : Product[]
}