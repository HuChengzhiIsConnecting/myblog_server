module.exports = app => {
  const auth = app.middleware.auth()
  app.router.post('/api/b/login', app.controller.login.login)//后台用户登录
  app.router.get('/api/b/articleList', auth, app.controller.backend.articleList)//后台获取文章列表
  app.router.get('/api/b/cateList', app.controller.backend.cateList)//后台获取分类列表
  app.router.post('/api/b/createCate', app.controller.backend.createCate)//新增分类
  app.router.get('/api/b/getQiniuToken', auth, app.controller.backend.getQiniuToken)  // 获取七牛token
};