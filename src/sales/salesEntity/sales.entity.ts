import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sales{
    @PrimaryGeneratedColumn()
    productId : string;

    @Column()
    productName : string;

    @Column({ nullable: false, type: 'integer', default: 0 })
    quantity : number;

    @Column({ nullable: false, type: 'numeric' })
    price : number;

    @Column({ nullable: true, type: 'timestamp with time zone' })
    salesOn : Date;

    @Column({type: 'timestamp with time zone', nullable: true})
    updatedOn : Date;
    
    @ManyToOne(() => Sales)
    @JoinColumn()
    sales : Sales;

}