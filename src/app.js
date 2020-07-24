"use strict";

import Koa from "koa";
import Router from "koa-router";
import body from "koa-body";

import { generateReport01 } from "./reportService";

const app = new Koa();
const baseRouter = new Router();

async function mainRoute(ctx, next) {
  const report = generateReport01();

  ctx.status = 200;
  ctx.type = 'application/json';
  ctx.body = report.contentData;
  return;
};

baseRouter.get("/", mainRoute);

app
  .use(body({
    text: false,
    urlencoded: false,
    jsonLimit: '5mb',
    onError: (err, ctx) => {
      throw err
    },
    parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE']
  }))
  .use(baseRouter.routes())
  .use(baseRouter.allowedMethods());

module.exports = app;