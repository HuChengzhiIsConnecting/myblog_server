const Service = require('egg').Service;
const jwt = require('jsonwebtoken')
class LoginService extends Service {
  // 登录
  async login({ name, password}) {
    const { ctx,app } = this
    console.log(name, password)
    const result = await ctx.model.User.findOne({
        where:{
            name,
            password,
            status:1
        }
    });
    if(!result)return {
        code:900,
        data:{},
        msg:"用户名或密码不正确，请稍候重试"
    }
    // 找到则以用户id生成token
    const token = jwt.sign({
        id: result._id
      }, app.config.jwt.cert, {
        expiresIn: '24h' // token过期时间
      })
    return {code:200,data:{token},msg:"操作成功"}
  }
}

module.exports = LoginService
