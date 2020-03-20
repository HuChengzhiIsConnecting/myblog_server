module.exports = app => {
    const {BIGINT,STRING, INTEGER, DATE,TEXT } = app.Sequelize;
    const Article = app.model.define('article', {
      id: { type: BIGINT(20), autoIncrement: true, primaryKey: true },
      title: { type: STRING(100),defaultValue:''},
      content: { type: TEXT,allowNull: false},
      cate_id:{type:BIGINT(20)},
      tags_group:{type:STRING(255)},
      status:{ type:INTEGER(2),defaultValue:1},
      created_at: DATE,
      updated_at: DATE,
      view_num:{ type:BIGINT(20),defaultValue:0}
    },{});
    Article.associate = function() {
      app.model.Article.belongsTo(app.model.Cate, { foreignKey: 'cate_id', targetKey: 'id' });
  }
    return Article;
  };