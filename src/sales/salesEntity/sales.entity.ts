import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Sales{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    productId : string;

    @Column()
    productName : string;

    @Column()
    productQuantity : number;

    @Column()
    salesPrice : number;

    @Column({type: 'timestamp', nullable: true})
    salesOn : Date;

    @Column({type: 'timestamp', nullable: true})
    updatedOn : Date;
    
}