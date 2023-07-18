import * as Firestore from "@google-cloud/firestore";

export class ModelBase {
  schema: object;
  collection: string;
  projectId: string;
  validate: any;
  db: Firestore.Firestore;

  constructor(schema: object, collection: string, projectId: string) {
    this.schema = schema;
    this.collection = collection;
    this.projectId = projectId;
    this.db = new Firestore.Firestore({
      projectId: this.projectId,
      timestampsInSnapshots: true,
    });
  }
  async getAll(limit: number, offset: any, sort: string) {
    const db = this.db;
    const locallimit = limit || 200;
    let queryRef = db
      .collection(this.collection)
      .orderBy(sort || "createdStamp")
      .limit(locallimit);
    if (offset) {
      queryRef = queryRef.startAfter(offset);
    }
    const documentRef = await queryRef.get();
    const result: [object?] = [];
    documentRef.forEach((doc) => {
      result.push(doc.data());
    });
    return result;
  }

  async search(filterlist: any, limit: number, offset: any, type: string) {
    const db = this.db;
    let localfilter: [
      [string | Firestore.FieldPath, Firestore.WhereFilterOp, string]
    ];
    const locallimit = limit || 200;
    let queryRef: Firestore.Query<Firestore.DocumentData> = await db.collection(
      this.collection
    );
    if (filterlist) {
      console.log("filterlist ", filterlist);
      localfilter = JSON.parse(filterlist);
      console.log("localfilter is", JSON.stringify(localfilter));
      for (const filter of localfilter) {
        queryRef = queryRef.where(...filter);
      }
    }
    queryRef = queryRef.orderBy("createdStamp", "desc");
    if (offset) {
      const offsetParsed = JSON.parse(offset);
      const newoffset = new Firestore.Timestamp(
        parseInt(offsetParsed._seconds),
        parseInt(offsetParsed._nanoseconds)
      );
      queryRef = queryRef.startAfter(newoffset);
    }
    const documentRef = await queryRef.limit(locallimit).get();
    const result: any = [];
    documentRef.forEach((doc) => {
      result.push(doc.data());
    });
    return result;
  }

  async findById(id: string) {
    const db = this.db;
    const doc = await db.collection(this.collection).doc(id).get();
    if (!(doc && doc.exists)) {
      throw new Error("Object not Found");
    }
    return doc.data();
  }

  async create(data: any, id?: string) {
    const db = this.db;
    const created = new Date().toUTCString();
    const createdStamp = Firestore.Timestamp.now();
    const docid = id || data.id;
    data.created = created;
    data.createdStamp = createdStamp;
    try {
      await db.collection(this.collection).doc(docid).set(data);
    } catch (e) {
      console.log("error is ", e);
      throw e;
    }
    return await this.findById(docid);
  }

  async edit(id: string, data: any) {
    const db = this.db;
    const olddata = await this.findById(id);
    const newdata = { ...olddata, ...data };
    await db.collection(this.collection).doc(id).set(newdata);
    return await this.findById(id);
  }
  async delete(id: string) {
    const db = this.db;
    await db.collection(this.collection).doc(id).delete();
    return "success";
  }
}
