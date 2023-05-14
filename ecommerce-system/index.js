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

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://caominh:123456789WEB@cluster0.sepuobq.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log(error.message));


const customerLogin = new mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  password: {
    type: String, 
    require: true,
     minlength: 8
   },
  address:{
      type: String,
      require: true
    },
fullname:{
        type: String,
        require: true
    },
})
const customer = mongoose.model('Customer', customerLogin);


const productDetail = new mongoose.Schema({
  product_name:{
    type: Number,
    required: true
  },
  price: {
    type: Number, 
    require: true
   },
  product_description:{
      type: String,
      require: true
    },
})
const product = mongoose.model('Product', productDetail);