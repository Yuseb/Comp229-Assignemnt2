/*
File name: index.js 
Student’s Name: Yusuf Esad Bilgic
StudentID: 301166614
Date: October 30th, 2022
*/
let express = require("express");
let router = express.Router();
let indexController = require("../controllers/index");

/* GET Home page. */
router.get('/', indexController.displayHomePage);
/* GET Home page. */
router.get('/home', indexController.displayHomePage);
/* GET About me page. */
router.get('/aboutme', indexController.displayAboutMePage);
/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);
/* GET Services */
router.get('/services', indexController.displayServicesPage);
/* GET Contact me page. */
router.get('/contactme', indexController.displayContactMePage);
module.exports = router;


/* GET Login Page */
router.get('/login', indexController.displayLoginPage);
/* POST Login Page */ 
router.post('/login', indexController.processLoginPage);


/* GET Register Page */
router.get('/register', indexController.displayRegisterPage);
/* POST Register Page */
router.post('/register', indexController.processRegisterPage);


/* GET userLogout */
router.get('/logout', indexController.performLogout);
module.exports = router;