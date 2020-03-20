'use strict';

const Controller = require('egg').Controller;

class BackendController extends Controller {
  async articleList() {
    const { ctx } = this;
    const article = await ctx.model.Article.findAndCountAll({
      offset:0 , // 前端分页组件传来的起始偏移量（pageNum-1）
      limit: 1,//一页显示多少条
      include: {
        model: this.app.model.Cate
      }
    });
    this.ctx.body = article;
  }
}

module.exports = BackendController;
