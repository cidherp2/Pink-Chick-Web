const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/pink/api',apiRoutes);

  module.exports = router; 