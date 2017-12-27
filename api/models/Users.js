module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    loginName: DataTypes.STRING,
    displayName: DataTypes.STRING,
    password: DataTypes.STRING
  });
  // Users.associate = (models) => {
  // };
  return Users;
};
