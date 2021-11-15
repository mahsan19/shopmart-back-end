
const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({

    productName : {
        type : String,
        required : true
    },
    price : {
        type :  Number,
        required : true
    },
    description : 
    {
        type: String,
    },
    productCategory : {
        type:String,
        required:true
    },
    quantity : 
    {
        type: String
    },
    bestSeller :
    {
        type: Boolean,
        required : true
    },
    photoURL: {
        type: String,
    },
    dateCreated :{
        type : Date,
        default : Date.now()
    }

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
