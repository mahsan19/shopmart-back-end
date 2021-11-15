
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const CustomerSchema = new Schema({

    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type :String,
        required : true
    },
    email : 
    {
        type: String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    phoneNumbers : 
    {
        type: Array
    },
    dateCreated :{
        type : Date,
        default : Date.now()
    }

});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
