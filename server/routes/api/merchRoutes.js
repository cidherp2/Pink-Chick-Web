const router = require('express').Router() 
const Merch = require ('../../models/Merch.js')

router.post('/', async (req,res) =>{
    try{
    
        const createMerch = await Merch.create(req.body)
        res.json({
            message:"Merch added",
            merch: createMerch.toJSON()
        })

    }catch(err){
        console.log(err)
    }
})

router.get('/', async (req,res) => {
    try {
        const getMerch = await Merch.findAll()
        res.json({
            merch: getMerch
        })
    } catch (err){
        console.log("There was an error: " + err );
    }
})

router.get('/:id', async (req, res) =>{
    try{
       const getMerch = await Merch.findByPk(req.params.id);
       res.send(getMerch);
    }catch(err){
        console.log('An error ocurred fetching the product: ', err)
    }
})

module.exports = router;