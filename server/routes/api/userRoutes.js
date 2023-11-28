const router = require('express').Router();
const User = require('../../models/User')
const Ticket = require('../../models/Tickets')

router.post('/', async (req,res) =>{
     try{
const createUser = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
})
res.json({
    message: 'User created',
    user: createUser.toJSON(),
});
     }catch(err){
        console.log(err)
     }
})

router.get('/', async (req,res)=>{
    try{
        const findUsers = await User.findAll({
            include:[{model:Ticket}],
        })
        res.json({
            message:"The users",
            user:findUsers.toJSON()
            
        })
    } catch(err){
        console.log('There was an error ' + err)
    }
})



module.exports = router;