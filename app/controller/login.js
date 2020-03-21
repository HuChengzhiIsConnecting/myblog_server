'use strict';
const Controller = require('egg').Controller;
class LoginController extends Controller {
  async login() {
    const { ctx } = this;
    const { username, password, code } = ctx.request.body
    let loginRes = await ctx.service.login.login({ username, password})
    ctx.body = loginRes;
  }
}

module.exports = LoginController;
