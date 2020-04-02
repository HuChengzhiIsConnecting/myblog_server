module.exports = app => {
  const auth = app.middleware.auth()
  
  app.router.post('/api/b/login', app.controller.login.login)//后台用户登录
  app.router.post('/api/b/createArticle',auth, app.controller.backend.createArticle)//新建文章
  app.router.get('/api/b/articleList',auth, app.controller.backend.articleList)//后台获取文章列表
  app.router.get('/api/b/cateList', auth,app.controller.backend.cateList)//后台获取分类列表
  app.router.post('/api/b/createCate',auth, app.controller.backend.createCate)//新增分类
  app.router.post('/api/b/createTag', auth,app.controller.backend.createTag)//新增标签
  app.router.get('/api/b/tagList',auth, app.controller.backend.tagList)//后台获取标签列表
  app.router.get('/api/b/getQiniuToken', auth,app.controller.backend.getQiniuToken)  // 获取七牛token
};