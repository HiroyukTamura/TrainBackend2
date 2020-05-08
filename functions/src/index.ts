import * as functions from 'firebase-functions';
import {MasterItem} from "./master_item";
import * as express from 'express';
import bodyParser = require("body-parser");
import * as logger from 'morgan';
import { ConnectionOptions, Connection, createConnection, getConnection } from 'typeorm';
import 'reflect-metadata';
import {MasterItemEntry} from "./entity/master_Item_entry";
import {DetailItem} from "./detail_item";
import {DetailItemEntry} from "./entity/detail_item_entry";

const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/master', async (request, response) => {
 const item = new MasterItem(request.body);

 try {
  const connection = await connect();

  const repo = connection.getRepository(MasterItemEntry);

  const entity = item.toEntry();
  const saveEntity = await repo.save(entity);

  response.send(saveEntity);

 } catch (e) {
  console.error(e);
  response.send(e)
 }
});

app.post('/detail', async (request, response) => {
 const item = new DetailItem(request.body);

 try {
  const connection = await connect();

  const repo = connection.getRepository(DetailItemEntry);

  const entity = item.toEntry();
  const saveEntity = await repo.save(entity);

  response.send(saveEntity);

 } catch (e) {
  console.error(e);
  response.send(e)
 }
});

exports.api = functions.https.onRequest(app);

export const config: ConnectionOptions = {
 name: 'master',
 type: 'mysql',
 "extra": {
  "socketPath": "/cloudsql/trainbackend2:asia-northeast1:dev"
 },
 username: 'root',
 // password: 'root', // review
 database: 'master',
 synchronize: true,
 logging: true,
 entities: [
  'lib/entity/**/*.js'
 ],
};

export const connect = async () => {

 let connection: Connection;

 try {
  connection = getConnection(config.name);
  console.log(connection)
 } catch(err) {
  connection = await createConnection(config);
 }

 return connection;
};