"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_1 = require("../lib/db/factory");
const DBSymbol = Symbol('Application#db');
exports.default = {
    get db() {
        return factory_1.default();
    }
};
