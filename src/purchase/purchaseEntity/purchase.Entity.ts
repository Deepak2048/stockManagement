import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    // @Column({type:'timestamp with time zone', nullable:false})
    // updatedOn : Date
}