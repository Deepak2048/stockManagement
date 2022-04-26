import { productModule } from "src/product/product.module";
import { Product } from "src/product/productEntity/product.entity";
import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Purchase {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({unique:true})
    purchaseId : string;

    @Column()
    productName : string;

    @Column({type:"integer"})
    purchaseQuantity : number;

    @Column({type:"numeric"})
    purchasePrice : number;

    @Column({type:'timestamp with time zone', nullable:false})
    purchaseOn : Date;

    @Column({type:'timestamp with time zone', nullable:true})
    updatedOn : Date;

    @ManyToMany(() => Product , (product) => product.purchase , {cascade: ["insert","update"]})
    @JoinColumn()
    product : Product[]
}