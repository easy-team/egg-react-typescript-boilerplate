'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const file_1 = require("./file");
const mysql_1 = require("./mysql");
function default_1(type) {
    switch (type) {
        case 'mysql':
            return new mysql_1.default();
        case 'mongo':
            return new mysql_1.default();
        default:
            return new file_1.default();
    }
}
exports.default = default_1;
