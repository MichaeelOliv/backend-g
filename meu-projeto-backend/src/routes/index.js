const express = require('express');
const router = express.Router();

router.use('/users', require('./userRoutes'));
router.use('/categories', require('./categoryRoutes'));
router.use('/products', require('./productRoutes'));

module.exports = router;