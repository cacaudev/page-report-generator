"use strict";
const app = require("./app");

const configServer = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || "development"
};

app.listen(configServer.port, configServer.ip, function () {
  console.log("Koa API server listening on %d, in %s mode",
    configServer.port,
    configServer.env
  );
});

