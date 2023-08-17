const { DataTypes } = require('sequelize');
const {sequelize} = require('../../config/mySqlConnection')
const crypto = require('crypto');
const { encrypt } = require("../../utils/encryptionDecryption")
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
    onDelete: 'SET NULL'
  },
  designationId:{
    type: DataTypes.INTEGER,
    references:{
      model:"designations",
      key:"id"
    },
    onDelete: 'SET NULL'
  },
  isSignedIn:{
    type: DataTypes.BOOLEAN,
    defaultValue:false
  }
},
);

User.beforeCreate((user) => {
  const encryption = encrypt(user.password)
  user.password = encryption
});
User.prototype.encryption = async function (password) {
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(password);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'),
  encryptedData: encrypted.toString('hex') };
};

User.prototype.decryption = async function (password) {
  let iv = Buffer.from(password.iv, 'hex');
  let encryptedText = Buffer.from(password.encryptedData, 'hex');
  let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};


module.exports = User;

