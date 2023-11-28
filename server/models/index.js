const User = require('./User');
const Ticket = require ('./Tickets')
const Merch = require('./Merch')

Ticket.belongsTo(User,{
    foreignKey:'userId',
    onDelete: 'CASCADE'

})

User.hasMany(Ticket,{
    foreignKey:'userId'
})

module.exports = {
    Ticket,
    User,
    Merch,
  };
  