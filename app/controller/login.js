'use strict';
const Controller = require('egg').Controller;
class LoginController extends Controller {
  async login() {
    const { ctx } = this;
    const { name, password, code } = ctx.request.body
    let loginRes = await ctx.service.login.login({ name, password})
    ctx.body = loginRes;
  }
}

module.exports = LoginController;
