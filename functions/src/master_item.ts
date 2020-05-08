import {MasterItemEntry} from "./entity/master_Item_entry";

export class MasterItem {

    private readonly rlNum: number;
    private readonly page: number;
    private readonly time: number;
    private readonly desc: string;
    private readonly trNumList: string;
    private readonly lineSetList: string;
    private readonly index: number;

    constructor(body: any) {
        this.index = body.index;
        this.rlNum = body.rlNum;
        this.page = body.page;
        this.time = body.time;
        this.desc = body.desc;
        this.trNumList = body.trNumList;
        this.lineSetList = body.lineSetList;
    }

    toString(): string {
        return `rlNum: ${this.rlNum}, page: ${this.page}, time: ${this.time}, desc: ${this.desc}, trNumList: ${this.trNumList}, lineSetList: ${this.lineSetList}`;
    }

    toEntry(): MasterItemEntry {
        const entity = new MasterItemEntry();
        entity.rlNum = this.rlNum;
        entity.page = this.page;
        entity.time = this.time;
        entity.desc = this.desc;
        entity.trNumList = this.trNumList;
        entity.lineSetList = this.lineSetList;
        entity.index = this.index;
        return entity;
    }
}