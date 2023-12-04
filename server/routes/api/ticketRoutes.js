const router = require('express').Router()
const Ticket = require('../../models/Tickets')

router.post('/', async (req, res) =>{
    try{
        const createTicket = await Ticket.create(req.body)
        res.json({
            message:'Ticket created',
            ticket: createTicket.toJSON()
        })
    }catch(err){
        console.log(err)
    }
})

router.delete('/:id', async (req,res)=>{
    try {
const deleteTicket = await Ticket.destroy({
    where:{
        id:req.params.id
    }
})
res.json({
    message: "Ticket deleted",
    // ticket:deleteTicket.toJSON()
})
    }catch(err){
        console.log(err)
    }
})

router.get('/', async (req,res) =>{
    try{
        const getTickets = await Ticket.findAll()
        res.json({
            ticket: getTickets
        })
    } catch(err){
        console.log('Erro trying to get the tickets: ', err)
    }
})

module.exports = router