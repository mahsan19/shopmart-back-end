const productModel = require("../models/ProductModel.js");
exports.createAProduct =(req,res)=>{



    const product = new productModel(req.body);
    product.save()
    .then((newProduct)=>{

        res.json({
            message :"The Product Was successfully created and stored in the databaase",
            data : newProduct
        })

    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })

};


exports.getProducts =(req,res)=>{

    const result = req.query.bestSeller;
    const category = req.query.category;

    if(result){

        productModel.find({bestSeller: result === "yes"? true : false})
        .then(products=>{
            res.json({
                message : `${products.length} products(s)`,
                data : products
            })
        })
        }else if(category)
        {
            productModel.find({productCategory : category})
            .then(products=>{
                res.json({
                    message : `${products.length} products(s) of ${category} category`,
                    data : products
                })
            })

        }
        else{
    productModel.find()
    .then(products=>{

        res.json({
            message : `${products.length} total Product(s) in the database`,
            data : products
        })

    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })
        }
};

exports.getCategories=(req,res)=>{


    productModel.find().distinct("productCategory")
    .then(categories=>{
        res.json({
            message : `${categories.length} Categories`,
            data : categories
        })
    })
    


};

exports.getAProduct=(req,res)=>{


    productModel.findById(req.params.id)
    .then(prod=>{

    
        if(prod)
        {
            res.json({

                message : `Product with the id ${req.params.id}`,
                data : prod
            })
        }

        else
        {

            res.status(404).json({
                message : `There is no Product in our database with the id ${req.params.id}`
            })
        }


    })

    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })


};


exports.updateAProduct =(req,res)=>{


    productModel.findByIdAndUpdate(req.params.id, req.body, {new :true})
    .then(prod=>{

        if(prod)
        {
            res.json({
                message : `The Product with the id ${req.params.id} was updated`,
                data : prod
            })
        }
        else
        {
            res.status(404).json({
                message : `Product with ID ${req.params.id} was not found`
            })
        }

    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })


};

exports.deleteAProduct=(req,res)=>{

    
    productModel.findByIdAndRemove(req.params.id)
    .then((prod)=>{

        if(prod)
        {
            res.json({
                message: `The Product with the ID ${req.params.id} was deleted`
            })
        }

        else
        {
            res.status(404).json({
                message : `Product with ID ${req.params.id} was not found`
            })
        }

    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })

};