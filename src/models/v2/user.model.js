
const { roles } = require('../../config/roles');
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
    type:DataTypes.ENUM('admin','user')
  },
  isEmailVerified: {
    type: DataTypes.BOOLEAN,
    default: false,
  },
},
);

// `sequelize.define` also returns the model

// add plugin that converts mongoose to json
// User.plugin(toJSON);
// User.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
// userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
//   const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
//   return !!user;
// };

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
// User.methods.isPasswordMatch = async function (password) {
//   const user = this;
//   return bcrypt.compare(password, user.password);
// };

// User.pre('save', async function (next) {
//   const user = this;
//   if (user.isModified('password')) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }
//   next();
// });

/**
 * @typedef User
 */

module.exports = User;
