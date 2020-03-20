'use strict';

const Controller = require('egg').Controller;

class FrontendController extends Controller {
  async blogList() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = FrontendController;
