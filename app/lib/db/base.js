'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const shortid = require("shortid");
const dbpath = path.resolve(__dirname, 'blog.json');
class DB {
    constructor(name = dbpath) {
        this.name = name;
    }
    getUniqueId() {
        return shortid.generate();
    }
    get(collectionName) {
        return null;
    }
    query(collectionName, json) {
        return null;
    }
    add(collectionName, json) {
        return null;
    }
    update(collectionName, where, json) {
        return null;
    }
    delete(collectionName, field) {
        return null;
    }
    getPager(collectionName, condition) {
        return null;
    }
}
exports.default = DB;
