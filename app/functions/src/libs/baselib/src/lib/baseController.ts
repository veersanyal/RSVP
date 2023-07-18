import ServiceBase from './baseService.js';
import { Request, Response } from 'express';

export class ControllerBase {
  service: ServiceBase;
  schema: any;
  constructor(service: ServiceBase, schema: any) {
    this.service = service;
    this.schema = schema;
  }

  validateSchema(object: object, schema: any) {
    const { error, value } = schema.validate(object);
    if (error) {
      console.log('in error' + console.log(error.message));
      throw error;
    }
    return { error, value };
  }

  async create(req: Request, res: Response) {
    try {
      const payload = req.body;
      this.validateSchema(payload, this.schema);
      const result = await this.service.create(payload);
      return res.status(200).send(result);
    } catch (err) {
      return this.handleError(res, err as Error);
    }
  }
  async search(req: Request, res: Response) {
    try {
      const limit = parseInt(req.query['limit'] as string);
      if (limit && isNaN(limit)) {
        throw new Error('limit is a not a number');
      }
      const offset = req.query['offset'];
      const sort = req.query['sort'] as string;
      const filter = req.query['filter'];
      const result = await this.service.search(filter, limit, offset, sort);
      return res.status(200).send(result);
    } catch (err) {
      return this.handleError(res, err as Error);
    }
  }
  async all(req: Request, res: Response) {
    try {
      const limit: number = parseInt(req.query['limit'] as string);
      const offset = req.query['offset'];
      const sort = req.query['sort'] as string;
      const result = await this.service.all(limit, offset, sort);
      return res.status(200).send(result);
    } catch (err) {
      return this.handleError(res, err as Error);
    }
  }

  async get(req: Request, res: Response) {
    try {
      const id = req.params['id'];
      const result = await this.service.get(id);
      return res.status(200).send(result);
    } catch (err) {
      return this.handleError(res, err as Error);
    }
  }
  async patch(req: Request, res: Response) {
    console.log('Updating record')
    try {
      const id = req.params['id'];
      const payload = req.body;
      this.validateSchema(payload, this.schema);
      const result = await this.service.patch(id, payload);
      return res.status(200).send(result);
    } catch (err) {
      return this.handleError(res, err as Error);
    }
  }
  health(req: Request, res: Response) {
    console.log('Responding to health')
    return res.status(200).send({ status: 'healthy' });
  }
  async remove(req: Request, res: Response) {

    try {
      const id = req.params['id'];

      // Need to protect this ??
      /*if (id === "DELETEALL"){
        console.log('Deleting ALL records')
        await this.service.removeAll();
        
      } */
      await this.service.remove(id);
      console.log('Deleting record', id)
      return res.status(204).send('Deleted record id ' + id);
    } catch (err) {
      return this.handleError(res, err as Error);
    }
  }
  handleError(res: Response, err: Error) {
    return res
      .status(500)
      .send({ code: 'ER-00', message: `${err.name} - ${err.message}` });
  }
}
