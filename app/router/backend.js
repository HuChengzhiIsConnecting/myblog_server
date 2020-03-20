module.exports = app => {
    app.router.get('/api/b/article/list', app.controller.backend.articleList);
  };