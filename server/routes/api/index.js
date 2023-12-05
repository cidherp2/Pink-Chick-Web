const router = require('express').Router();
const userRoutes = require('./userRoutes')
const merchRoutes = require('./merchRoutes')
const ticketRoutes = require('./ticketRoutes')
const pagoRoutes = require('./pagoRoutes')

router.use('/user',userRoutes)
router.use('/merch', merchRoutes)
router.use('/tickets', ticketRoutes)
router.use('/pago', pagoRoutes)

module.exports = router;