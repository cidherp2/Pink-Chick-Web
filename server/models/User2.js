const {Model, DataTypes} = require('sequelize');
const sequelize = require('../database')
const bcrypt = require('bcrypt');
const Ticket = require('./Tickets')



class User extends Model {
  async comparePassword(password){
        return bcrypt.compareSync(password, this.password)
    }}
User.init({
    id:{
     type:DataTypes.INTEGER,
     allowNull:false,
     primaryKey: true,
     autoIncrement:true
    },
    username:{
     type: DataTypes.STRING,
     allowNull: false,
     unique: true,
    },
    email:{
     type: DataTypes.STRING,
     allowNull: false,
     unique: true,
     validate:{
        isEmail:true,
     }   
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
         len: [8], // Ensure the password is at least 8 characters long
        },
      }, 
},{
    hooks: {
        async beforeCreate(newUserData) {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
      },
    sequelize,
    modelName: 'User',
    timestamps: false,
    freezeTableName: true,
    underscored: false,
});

User.hasMany(Ticket,{foreignKey:'userId'});

 module.exports = User;