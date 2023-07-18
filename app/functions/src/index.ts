import { server } from "./server.js";
import { https } from "firebase-functions";
const api = https.onRequest(server);
export { api };
// exports.createOrder = createOrder;
// exports.updateOrder = updateOrder;
