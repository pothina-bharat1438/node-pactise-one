const express = require('express');
const route = express.Router();

route.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'handling GET method'
    });
});

route.post('/',(req,res,next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'handling post method',
        createdProduct: product
    });
});

route.get('/:productID',(req,res,next) => {
    const id = req.params.productID;
    if(id === "special")  {
        res.status(200).json({
            message: 'you discovered a special id'
        });
    }
    else {
        res.status(201).json({
            message: 'you passed an id'
        });
    }
   
});

route.patch('/',(req,res,next) => {
    res.status(200).json({
        message: 'handling patch method'
    });
});

route.delete('/',(req,res,next) => {
    res.status(200).json({
        message: 'handling delete method'
    });
});

module.exports  = route;