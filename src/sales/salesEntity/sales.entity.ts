import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sales{
    @PrimaryGeneratedColumn()
    id : number;

    @PrimaryColumn({unique:true})
    productId : string;

    @Column()
    productName : string;

    @Column({ nullable: false, type: 'integer', default: 1 })
    salesQuantity : number;

    @Column({ nullable: false, type: 'numeric' })
    salesPrice : number;

    @Column({ nullable: true, type: 'timestamp with time zone' })
    salesOn : Date;

    @Column({type: 'timestamp with time zone', nullable: true})
    updatedOn : Date;
    
    @ManyToOne(() => Sales)
    @JoinColumn()
    sales : Sales;

}