"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
// src/controller.ts
var routing_controllers_1 = require("routing-controllers");
var MainController = /** @class */ (function () {
    function MainController() {
    }
    MainController.prototype.main = function () {
        return {
            hello: "World"
        };
    };
    __decorate([
        routing_controllers_1.Get("/hello")
    ], MainController.prototype, "main");
    MainController = __decorate([
        routing_controllers_1.Controller()
    ], MainController);
    return MainController;
}());
exports["default"] = MainController;
