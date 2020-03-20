'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/backend')(app);
  require('./router/frontend')(app);
};
