module.exports = app => {
    const {BIGINT,STRING, INTEGER, DATE,TEXT } = app.Sequelize;
    const User = app.model.define('user', {
      id: { type: BIGINT(20), autoIncrement: true, primaryKey: true },
      name: { type: STRING(50),allowNull:false},
      password: { type: STRING(20),allowNull: false},
      phone:{type: STRING(20),defaultValue:''},
      intro: { type:TEXT,defaultValue:''},
      status:{ type:INTEGER,defaultValue:1},
      last_sign_in_at: DATE,
      created_at: DATE,
      updated_at: DATE,
    },{});
    return User;
  };