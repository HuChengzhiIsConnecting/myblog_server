module.exports = app => {
    app.router.get('/api/f/blog/list',app.controller.frontend.blogList);
  }; 