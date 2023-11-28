const router = require('express').Router();
const userRoutes = require('./userRoutes')
const merchRoutes = require('./merchRoutes')
const ticketRoutes = require('./ticketRoutes')

router.use('/user',userRoutes)
router.use('/merch', merchRoutes)
router.use('/tickets', ticketRoutes)

module.exports = router;