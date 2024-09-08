"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Collection {
    constructor(db, name) {
        this.db = db;
        this.name = name;
    }
    get() {
        return this.db.get(this.name);
    }
    query(json) {
        return this.db.query(this.name, json);
    }
    add(json) {
        return this.db.add(this.name, json);
    }
    update(where, json) {
        return this.db.update(this.name, where, json);
    }
    delete(field) {
        return this.db.delete(this.name, field);
    }
    getPager(condition) {
        return this.db.getPager(this.name, condition);
    }
    getOrderAscByField(field) {
        return this.get().orderBy(field, 'asc').value();
    }
    getOrderDescByField(field) {
        return this.get().orderBy(field, 'desc').value();
    }
}
exports.default = Collection;
