const express = require('express');
const passport = require('passport');

const router = express.Router();


//controller for routing
const homeController = require('../controllers/HomeController');

router.get('/', passport.checkAuthentication, homeController.home);

// router.get('/' , homeController.home);
router.use('/users', require('./UserRoutes'));




module.exports = router;