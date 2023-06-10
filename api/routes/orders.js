const express = require('express');
const route = express.Router();

route.get('/', (req,res,next) => {

    res.status(200).json({
        message: 'handling order GET method'
    });
});

route.post('/', (req,res,next) => {
    const order = {
        productID: req.body.productID,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'handling order POST method',
        order: order
    });
});

route.get('/:orderID', (req,res,next) => {

    res.status(200).json({

        message: 'order details'
    });
});


route.delete('/:orderID', (req,res,next) => {

    res.status(200).json({

        message: 'order deleted'
    });
});




module.exports = route;