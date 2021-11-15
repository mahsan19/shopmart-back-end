const express = require('express')
const router = express.Router()
const customerService = require("../services/CustomerService.js");

//Create
router.post("/",customerService.createACustomer)

//Read ALL 
router.get("/",customerService.getCustomers)


//READ ONE customer

router.get("/:id",customerService.getACustomer)

//Update not allowed

router.put("/:id",customerService.updateACustomer)


//DELETE not allowed
router.delete("/:id",customerService.deleteACustomer)



module.exports = router