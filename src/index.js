"use strict";
exports.__esModule = true;
// src/index.ts
require("reflect-metadata");
var routing_controllers_1 = require("routing-controllers");
var controller_1 = require("./controller");
var port = process.env.PORT || 4000;
var app = routing_controllers_1.createKoaServer({
    controllers: [controller_1["default"]]
});
app.listen(port, function () { return console.log("Listening on port " + port); });
