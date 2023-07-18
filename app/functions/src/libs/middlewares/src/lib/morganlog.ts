"use strict";

import { Request, Response } from "express";
export function morganlog(tokens: any, req: Request, res: Response) {
  let severity = "INFO";
  if (parseInt(tokens.status(req, res)) === 500) {
    severity = "ERROR";
  }
  return JSON.stringify({
    client: tokens["remote-addr"](req, res),
    severity: severity,
    method: tokens.method(req, res),
    url: tokens.url(req, res),
    status: tokens.status(req, res),
    responsTime: tokens["response-time"](req, res),
  });
}
