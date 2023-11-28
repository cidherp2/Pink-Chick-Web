const router = require('express').Router();
const {User} = require('../../models/index')
const {Ticket} = require('../../models/index')

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
        // res.send(findUsers)
        // const usersArray = findUsers.map(user => user.get({ plain: true }));
        // console.log(findUsers)
        res.json({
            message:"The users",
            user:findUsers
            
        })
    } catch(err){
        console.log('There was an error ' + err)
    }
})



module.exports = router;