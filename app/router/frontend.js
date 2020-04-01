module.exports = app => {
    app.router.get('/api/f/articleListByDate',app.controller.frontend.articleListByDate);
    app.router.get('/api/f/articleDetail',app.controller.frontend.articleDetail);
  }; 