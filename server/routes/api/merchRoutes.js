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

module.exports = router;