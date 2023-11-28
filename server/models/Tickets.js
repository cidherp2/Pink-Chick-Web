const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../database');
const { v4: uuidv4 } = require('uuid');
const Band = require('../models/Bands')

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
}, {
  hooks: {
    async beforeCreate(newTicket,options) {
        try{
            const ticketCount = await Ticket.count()
        const ticketLimit = 20;
        if (ticketCount >= ticketLimit) {
            throw new Error('Ticket limit reached. Cannot create more tickets.');
          }
      newTicket.id = await uuidv4();
        }catch(err){
            console.error('Error creating ticket:', error);
            return Promise.reject(error);
        }
    },
  },
  sequelize,
  modelName:'Ticket',
  timestamps: true,
  freezeTableName: true,
  underscored: false
});
Ticket.belongsToMany(Band,{through: 'TicketBands'})
Band.belongsToMany(Ticket, { through: 'TicketBands' });
// Instance method to format date when fetching data
Ticket.prototype.getFormattedDate = function () {
  return this.date.toLocaleDateString('en-GB');
};



module.exports = Ticket;
