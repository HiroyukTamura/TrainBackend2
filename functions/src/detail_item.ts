import {DetailItemEntry} from "./entity/detail_item_entry";

export class DetailItem {

    private readonly typeName: string;
    private readonly trainNo: string;
    private readonly index: string;
    private readonly descJson: string;
    private readonly dateListJson: string;
    private readonly timeJson: string;

    constructor(body: any) {
        this.typeName = body.typeName;
        this.trainNo = body.trainNo;
        this.index = body.index;
        this.descJson = body.descJson;
        this.dateListJson = body.dateListJson;
        this.timeJson = body.timeJson;
    }

    toString(): string {
        return `typeName: ${this.typeName}, trainNo: ${this.trainNo}, index: ${this.index}, descJson: ${this.descJson}, dateListJson: ${this.dateListJson}, timeJson: ${this.timeJson}`;
    }

    toEntry(): DetailItemEntry {
        const entity = new DetailItemEntry();
        entity.typeName = this.typeName;
        entity.trainNo = this.trainNo;
        entity.index = this.index;
        entity.descJson = this.descJson;
        entity.dateListJson = this.dateListJson;
        entity.timeJson = this.timeJson;
        return entity;
    }
}