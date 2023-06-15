const { DataTypes } = require('sequelize');
const {sequelize} = require('../../config/mySqlConnection')
const User = sequelize.define('users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate:{
      isEmail:true,
      isLowercase:true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      validate(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error('Password must contain at least one letter and one number');
        }
    }
    },
  },
  role: {
    type:DataTypes.ENUM('admin','hr', 'employee'),
    defaultValue:"admin"
  },
  phoneNumber:{
    type: DataTypes.STRING,
  },
  designation:{
    type: DataTypes.STRING,
  },
  isEmailVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  tenantId:{
    type: DataTypes.INTEGER,
    references:{
      model:"tenant",
      key:"id"
    },
  },
},
);
module.exports = User;

