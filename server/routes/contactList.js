let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
// connect to contacts model
let Contact = require('../models/contacts');
let contactController = require('../controllers/contactList');

function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/*GET ROUTE for the contact list page */
router.get('/', requireAuth, contactController.displayContactList);

/*GET Route for displaying the Add page */
router.get('/add', requireAuth, contactController.displayAddPage);
/*POST Route for processing the Add page */
router.post('/add', requireAuth, contactController.processAddPage);



/*GET Route for displaying the Edit page */
router.get('/edit/:id', requireAuth, contactController.displayEditPage);
/*POST Route for processing the Edit page */
router.post('/edit/:id', requireAuth, contactController.processEditPage);

/*GET to perform Deletion */
router.get('/delete/:id', requireAuth, contactController.performDelete);


module.exports = router;