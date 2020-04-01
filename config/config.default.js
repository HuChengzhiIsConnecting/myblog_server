/* eslint valid-jsdoc: "off" */
'use strict';
const sequelize_dev=require("./sequelize")
const sequelize_prod=require("./sequelize_prod")
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    sequelize:appInfo.env==='local'?sequelize_dev:sequelize_prod,
    jwt: {
      cert: 'hczlovesjl' // jwt秘钥
    },
    security: {
      csrf: {
        enable: false,
      },
 }
  };
  config.qiniu={
    ak:"spWD2TGZEn0Q2UZBhOG8hYWDp0UIqGvFJOhxk6dW",
    sk:"4dAi2deU2WOT9ZikCGWjesRVedXNBLl_T7F_k4xz"
  }
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
