const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
//var bodyParser = require('body-parser')

const productsRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

const app = express();
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}));
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin-, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method === "options") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE");
        res.status(200).json({});
    }
})

app.use('/products', productsRoutes);
app.use('/orders', orderRoutes);


app.use((req,res,next) => {
    const error = new Error('not found');
    error.status = 400;
    next(error);
});

app.use((error,req,res,next) => {
    res.status(error.status  || 500);
    res.json({
        error: {
           message: error.message
        }
    });
});

module.exports = app;