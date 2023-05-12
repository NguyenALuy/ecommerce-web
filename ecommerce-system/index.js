// This load the products as a javascript object from products.js file
// let products = require('./products');
// console.log(products);

// Fill in your code here to build NodeJS + Express + EJS web application
const express = require('express');
const app = express();//get the object of express out
const port = 3000;
app.set('view engine', 'ejs');
//set up view engine to ejs
app.use(express.static('public'));
//when working with the POST method have to include the URLENCODED
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.render('login-form');
})

app.get('/customer-register', (req, res) => {
    res.render('customer-register');
});

app.get('/vendor-register', (req, res) => {
    res.render('vendor-register');
});

app.get('/shipper-register', (req, res) => {
    res.render('shipper-register');
});

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
})