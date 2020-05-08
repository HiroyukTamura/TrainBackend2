import {Entity, Column, BaseEntity, PrimaryColumn} from "typeorm";

@Entity()
// @ts-ignore
export class MasterItemEntry extends BaseEntity {

    @Column()
        // @ts-ignore
    rlNum: number;

    @Column()
        // @ts-ignore
    page: number;

    @PrimaryColumn()
        // @ts-ignore
    index: number;

    @Column()
        // @ts-ignore
    time: number;

    @Column()
        // @ts-ignore
    desc: string;

    @Column('longtext')
        // @ts-ignore
    trNumList: string;

    @Column('longtext')
        // @ts-ignore
    lineSetList: string;
}