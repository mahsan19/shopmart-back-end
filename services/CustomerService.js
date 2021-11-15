const customerModel = require("../models/CustomerModel.js");
const bcrypt = require('bcryptjs');


exports.createACustomer =(req,res)=>{

    bcrypt.genSalt(10, (err, salt) => { 
        bcrypt.hash(req.body.password, salt, (err, hash) => {

            if (err){
                reject('Error encrypting the password');
            }else{

            req.body.password = hash;
            
    
    const customer = new customerModel(req.body);
    customer.save()
    .then((newCust)=>{

        res.json({
            message :"The Customer Was successfully created and stored in the databaase",
            data : newCust
        })

    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })

            }
        })
    })

    

};


exports.getCustomers =(req,res)=>{


    customerModel.find()
    .then(customers=>{

        res.json({
            message : `${customers.length} Customer(s) in the database`,
            data : customers
        })

    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })

};


exports.getACustomer=(req,res)=>{


    customerModel.findById(req.params.id)
    .then(cust=>{

        if(cust)
        {
            res.json({

                message : `Customer with the id ${req.params.id}`,
                data : cust
            })
        }

        else
        {

            res.status(404).json({
                message : `There is no Customer in our database with the id ${req.params.id}`
            })
        }


    })

    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })


};


exports.updateACustomer =(req,res)=>{

            res.json({
                message : "You can not Update a customer"
            })
};

exports.deleteACustomer=(req,res)=>{

    res.json({
        message : "You can not Delete a customer"
    })

};