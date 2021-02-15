'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const json_typescript_mapper_1 = require("@hubcarl/json-typescript-mapper");
class Condition {
    constructor() {
        this.where = {};
        this.like = {};
        this.orderByField = 'createTime';
        this.orderBy = 'desc';
        this.title = undefined;
        this.categoryId = undefined;
        this.status = undefined;
        this.tag = undefined;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.where = {};
        this.like = {};
    }
}
tslib_1.__decorate([
    json_typescript_mapper_1.JsonProperty('title'),
    tslib_1.__metadata("design:type", String)
], Condition.prototype, "title", void 0);
tslib_1.__decorate([
    json_typescript_mapper_1.JsonProperty('categoryId'),
    tslib_1.__metadata("design:type", Number)
], Condition.prototype, "categoryId", void 0);
tslib_1.__decorate([
    json_typescript_mapper_1.JsonProperty('status'),
    tslib_1.__metadata("design:type", Number)
], Condition.prototype, "status", void 0);
tslib_1.__decorate([
    json_typescript_mapper_1.JsonProperty('tag'),
    tslib_1.__metadata("design:type", String)
], Condition.prototype, "tag", void 0);
tslib_1.__decorate([
    json_typescript_mapper_1.JsonProperty('pageIndex'),
    tslib_1.__metadata("design:type", Number)
], Condition.prototype, "pageIndex", void 0);
tslib_1.__decorate([
    json_typescript_mapper_1.JsonProperty('pageSize'),
    tslib_1.__metadata("design:type", Number)
], Condition.prototype, "pageSize", void 0);
exports.default = Condition;
