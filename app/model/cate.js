module.exports = app => {
    const {BIGINT,STRING, INTEGER, DATE,TEXT } = app.Sequelize;
    const Cate = app.model.define('cate', {
      id: { type: BIGINT(20), autoIncrement: true, primaryKey: true },
      name: { type: STRING(50),allowNull:false},
      status:{ type:INTEGER(2),defaultValue:1},
      created_at: DATE,
      updated_at: DATE
    },{});
   
    return Cate;
  };