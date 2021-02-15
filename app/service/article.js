"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const json_typescript_mapper_1 = require("@hubcarl/json-typescript-mapper");
const collection_1 = require("../lib/db/collection");
const article_1 = require("../model/article");
class ArticeService extends egg_1.Service {
    constructor(ctx) {
        super(ctx);
        this.context = ctx;
        this.colllection = new collection_1.default(ctx.db, 'article');
    }
    async getArtilceList(condition) {
        if (condition.categoryId) {
            condition.where.categoryId = condition.categoryId;
        }
        if (condition.status) {
            condition.where.status = condition.status;
        }
        if (condition.title) {
            condition.like.title = condition.title;
        }
        return this.colllection.getPager(condition);
    }
    async saveArticle(data) {
        const article = json_typescript_mapper_1.deserialize(article_1.default, data);
        if (article.id) {
            return this.colllection.update({ id: article.id }, article);
        }
        article.id = this.context.db.getUniqueId();
        this.colllection.add(article);
        return article;
    }
    async query(json) {
        return this.colllection.query(json);
    }
    async deleteArticle(id) {
        return this.colllection.delete({ id });
    }
}
exports.default = ArticeService;
