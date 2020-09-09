/* eslint valid-jsdoc: "off" */
'use strict';
const sequelize_dev = require("./sequelize")
const sequelize_prod = require("./sequelize_prod")
const path=require('path')
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    sequelize: appInfo.env === 'local' ? sequelize_dev : sequelize_prod,
    jwt: {
      cert: 'hczlovesjl' // jwt秘钥
    },
    security: {
      csrf: {
        enable: false,
      },
    },
    view : {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.html': 'nunjucks' //左边写成.html后缀，会自动渲染.html文件
      },
    },
    static : {
      prefix: '/',
      dir: [path.join(appInfo.baseDir, 'app/public/frontend'), path.join(appInfo.baseDir, 'app/public/backend')],// 多静态文件入口
      maxAge: 31536000,
    }
  };
  config.qiniu = {
    ak: "spWD2TGZEn0Q2UZBhOG8hYWDp0UIqGvFJOhxk6dW",
    sk: "4dAi2deU2WOT9ZikCGWjesRVedXNBLl_T7F_k4xz"
  }
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1584628821884_177';

  // add your middleware config here
  config.middleware = [];
  config.multipart = {
    /** 文件接收配置 */
    mode: 'file',
    fileSize: '100mb',
    whitelist:[
      '.pdf'
    ],
    /** 文件接收配置 */
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
