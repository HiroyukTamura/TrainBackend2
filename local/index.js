// import {MasterItemEntry} from "../functions/src/entity/master_Item_entry";

const rp = require('request-promise');

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: `${__dirname}/sqlite/master.db`,
    },
});

async function read() {
    const rows = await knex.select("*").from("master");
    console.log(rows.length);
    return rows;
}

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

(async () => {
    const rows = await read();

    console.log(`${rows.length}`);

    for (let i = 0; i < rows.length; i++) {
        const item = new RowItem(rows[i], i);

        const option = {
            url: 'https://us-central1-trainbackend2.cloudfunctions.net/api/master',
            method: 'POST',
            form: item.toMap(),
            json: true,
        };

        const result = await rp(option);
        await sleep(300);

        console.log(`count: ${i}, trainNo: ${result.rlNum}, typeName: ${result.page}`);
    }

    return true;
})().catch(e => {
    console.error(e);
});

class RowItem {

    // noinspection DuplicatedCode
    constructor(item, index) {
        this.rlNum = item.rlNum;
        this.page = item.page;
        this.time = item.time;
        this.desc = item.desc;
        this.trNumList = item.trNumList;
        this.lineSetList = item.lineSetList;
        this.index = index;
    }

    toMap(){
        return {
            rlNum: this.rlNum,
            page: this.page,
            time: this.time,
            desc: this.desc,
            trNumList: this.trNumList,
            lineSetList: this.lineSetList,
            index: this.index,
        };
    }
}

class DetailRowItem {
    // noinspection DuplicatedCode
    constructor(item) {
        this.typeName = item.typeName;
        this.trainNo = item.trainNo;
        this.tr = item.tr;
        this.desc = item.desc;
        this.descJson = item.descJson;
        this.dateListJson = item.dateListJson;
        this.timeJson = item.timeJson;
    }

    toMap(){
        return {
            typeName: this.typeName,
            trainNo: this.trainNo,
            index: this.tr,
            desc: this.desc,
            descJson: this.descJson,
            dateListJson: this.dateListJson,
            timeJson: this.timeJson,
        };
    }
}
