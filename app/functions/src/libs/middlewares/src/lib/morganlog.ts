"use strict";

import { Request, Response } from "express";
import { Body } from '../../../../../../.nuxt/components';
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
    body: req.body,
    responsTime: tokens["response-time"](req, res),
  });
}
