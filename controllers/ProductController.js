const express = require('express')
const router = express.Router()
const productService = require("../services/Productservice.js");

//Create
router.post("/",productService.createAProduct)

//Read ALL, filter bestSeller, cateogory 
router.get("/",productService.getProducts)


//Get Categories
router.get("/categories", productService.getCategories)


//READ ONE product

router.get("/:id",productService.getAProduct)

//Update

router.put("/:id",productService.updateAProduct)


//DELETE
router.delete("/:id",productService.deleteAProduct)



module.exports = router