import {Entity, Column, BaseEntity, PrimaryColumn} from "typeorm";

@Entity()
// @ts-ignore
export class DetailItemEntry extends BaseEntity {

    @Column()
        // @ts-ignore
    typeName: string;

    @Column()
        // @ts-ignore
    trainNo: string;

    @PrimaryColumn()
        // @ts-ignore
    index: string;

    @Column('longtext')
        // @ts-ignore
    descJson: string;

    @Column('longtext')
        // @ts-ignore
    dateListJson: string;

    @Column('longtext')
        // @ts-ignore
    timeJson: string;
}