module.exports = app => {
    app.router.get('/api/f/articleListByDate',app.controller.frontend.articleListByDate);
    app.router.get('/api/f/articleDetail',app.controller.frontend.articleDetail);
    app.router.post('/api/f/addViewNum',app.controller.frontend.addViewNum);
    app.router.post('/api/f/uploadFile',app.controller.frontend.uploadFile);
  }; 