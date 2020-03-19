/* eslint valid-jsdoc: "off" */
'use strict';
const mysql=require("./mysql")
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    mysql
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1584628821884_177';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
