'use strict';

import * as express from 'express';
export function cors(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  // CORS headers
  res.header('Access-Control-Allow-Origin', '*'); // restrict it to the required domain
  res.header(
    'Access-Control-Allow-Methods',
    'GET,PUT,POST,PATCH,DELETE,OPTIONS'
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  // Set custom headers for CORS
  res.header(
    'Access-Control-Allow-Headers',
    'Content-type,Authorization,Accept,X-Access-Token,X-Key'
  );
  if (req.method === 'OPTIONS') {
    console.log('options call made');
    res.status(200).end();
  } else {
    return next();
  }
}
