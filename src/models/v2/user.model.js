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
      model:"tenants",
      key:"id"
    },
  },
  departmentId:{
    type: DataTypes.INTEGER,
    references:{
      model:"departments",
      key:"id"
    },
  },
  designationId:{
    type: DataTypes.INTEGER,
    references:{
      model:"designations",
      key:"id"
    },
  },
  isSignedIn:{
    type: DataTypes.BOOLEAN,
    defaultValue:false
  }
},
);
module.exports = User;

