'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const json_typescript_mapper_1 = require("@hubcarl/json-typescript-mapper");
class Article {
    constructor() {
        this.id = '';
        this.title = '';
        this.summary = '';
        this.categoryId = -1;
        this.tag = '';
        this.authorId = -1;
        this.url = '';
        this.status = 0;
        this.hits = 0;
        this.content = '';
        this.createTime = Date.now();
    }
}
tslib_1.__decorate([
    json_typescript_mapper_1.JsonProperty('id'),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "id", void 0);
tslib_1.__decorate([
    json_typescript_mapper_1.JsonProperty('title'),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "title", void 0);
tslib_1.__decorate([
    json_typescript_mapper_1.JsonProperty('summary'),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "summary", void 0);
tslib_1.__decorate([
    json_typescript_mapper_1.JsonProperty('categoryId'),
    tslib_1.__metadata("design:type", Number)
], Article.prototype, "categoryId", void 0);
tslib_1.__decorate([
    json_typescript_mapper_1.JsonProperty('tag'),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "tag", void 0);
tslib_1.__decorate([
    json_typescript_mapper_1.JsonProperty('categoryId'),
    tslib_1.__metadata("design:type", Number)
], Article.prototype, "authorId", void 0);
tslib_1.__decorate([
    json_typescript_mapper_1.JsonProperty('createTime'),
    tslib_1.__metadata("design:type", Number)
], Article.prototype, "createTime", void 0);
tslib_1.__decorate([
    json_typescript_mapper_1.JsonProperty('hits'),
    tslib_1.__metadata("design:type", Number)
], Article.prototype, "hits", void 0);
tslib_1.__decorate([
    json_typescript_mapper_1.JsonProperty('url'),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "url", void 0);
tslib_1.__decorate([
    json_typescript_mapper_1.JsonProperty('status'),
    tslib_1.__metadata("design:type", Number)
], Article.prototype, "status", void 0);
tslib_1.__decorate([
    json_typescript_mapper_1.JsonProperty('content'),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "content", void 0);
exports.default = Article;
