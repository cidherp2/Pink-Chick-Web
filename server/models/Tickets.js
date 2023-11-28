const { Model, DataTypes, Sequelize, } = require('sequelize');
const sequelize = require('../config/connection');
const { v4: uuidv4 } = require('uuid');



class Ticket extends Model {}

Ticket.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  bands: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  userId:{
    type:DataTypes.INTEGER,
    allowNull: false,
    underscored:false,
    references:{
      model:'users',
      key: 'id'
    }
  },
}, {
  hooks: {
    async beforeCreate(newTicket,options) {
        try{
            const ticketCount = await Ticket.count()
        const ticketLimit = 25;
        if (ticketCount >= ticketLimit) {
            throw new Error('Ticket limit reached. Cannot create more tickets.');
          }
      newTicket.id = await uuidv4();

        } catch(err){
            console.error ('Error creating ticket:' + err);
            return Promise.reject(err);
        }
    },
  },
  sequelize,
  modelName:'ticket',
  timestamps: true,
  freezeTableName: true,
  underscored: false
});

// Ticket.belongsToMany(Band,{through: 'TicketBands'})
// Band.belongsToMany(Ticket, { through: 'TicketBands' });
// Instance method to format date when fetching data

Ticket.prototype.getFormattedDate = function () {
  return this.date.toLocaleDateString('en-GB');
};





module.exports = Ticket;
