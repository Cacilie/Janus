import { Collection, Item } from "japidb";
import { type Time } from "../Types/Time";

export class JapiDBService {

  private timesCollection: Collection;


  constructor() {
    this.timesCollection = new Collection('Times', 'id');
  }

  pushTime(time : Time){
    this.timesCollection.save(time);
  }

  getTimes() : Time[]{
    return this.timesCollection.find();
  }

}
