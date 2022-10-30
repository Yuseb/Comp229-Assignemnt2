/*
File name: contacts.js 
Student’s Name: Yusuf Esad Bilgic
StudentID: 301166614
Date: October 30th, 2022
*/
/* Databease Schema */
let mongoose = require('mongoose');

let contactModel = mongoose.Schema({
    contact_name: String,
    contact_number: String,
    contact_email: String
},
{
    collection:"business_contacts"
});

module.exports = mongoose.model('contact', contactModel);