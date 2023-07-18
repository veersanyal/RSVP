import { ModelBase } from "./baseModel.js";
import * as Id from "custom-random-id";
import axios from 'axios';
import FormData from "form-data";

export default class ServiceBase {
  db: ModelBase;
  constructor(model: ModelBase) {
    this.db = model;
  }
  async create(res: any) {
    if (!res.id) {
      console.log(Id);
      const ID = new Id.IdGenerator("{{ number_8 }}");
      res.id = ID.getFinalExpression();
    }
    return await this.db.create(res);
  }

  async search(filter: any, limit: number, offset: any, sort: string) {
    return await this.db.search(filter, limit, offset, sort);
  }

  async all(limit: number, offset: any, sort: string) {
    return await this.db.getAll(limit, offset, sort);
  }

  async get(id: string) {
    return await this.db.findById(id);
  }

  async patch(id: string, res: any) {
    return await this.db.edit(id, res);
  }
  async remove(id: string) {
    return await this.db.delete(id);
  }
}
export { ServiceBase };

