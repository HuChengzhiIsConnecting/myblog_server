'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // app.router.get('/',app.controller.frontend.index);
  require('./router/backend')(app);
  require('./router/frontend')(app);
};
