// This load the products as a javascript object from products.js file
// let products = require('./products');
// console.log(products);

// Fill in your code here to build NodeJS + Express + EJS web application
const express = require('express');
const app = express();//get the object of express out
const port = 3000;
const ejs=require('ejs')
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
//set up view engine to ejs
app.use(express.static('public'));
//when working with the POST method have to include the URLENCODED
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.render('login-form');
})

app.post('/', (req, res)=>{
  const username = req.body.username;
  const password = req.body.password;

  login_info.findOne({username:username},(err,foundResults)=>{
    if(err){
      console.log(err)
    }else{
      if(foundResults.password === password){
        res.send('You have logged in')
      }else{
          res.send('Incorrecr username or password');
        }
    }
  });
});

app.get('/customer-register', (req, res) => {
    res.render('customer-register');

});
app.post('/customer-register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newCustomer = new customer({
    username: username,
    password: password
  })
  newCustomer.save((err)=>{
    err? console.log(err):res.send("Create new user succesfully")
  })
});
app.get('/vendor-register', (req, res) => {
    res.render('vendor-register');
});

app.post('/vendor-register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newVendor = new vendor({
    username: username,
    password: password
  })
  newVendor.save((err)=>{
    err? console.log(err):res.send("Create new user succesfully")
  })
});

app.get('/shipper-register', (req, res) => {
    res.render('shipper-register');
});
app.post('/shipper-register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newShipper = new shipper({
    username: username,
    password: password
  })
  newShipper.save((err)=>{
    err? console.log(err):res.send("Create new user succesfully")
  })
});
app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
})

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://caominh:123456789WEB@cluster0.sepuobq.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log(error.message));


const customerSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  password: {
    type: String, 
    require: true,
     minlength: 8
   },
   realname: {
    type:String
   },
  address:{
      type: String
    },
})
const customer = mongoose.model('Customer', customerSchema);
module.exports=customer;

const vendorSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  password: {
    type: String, 
    require: true,
     minlength: 8
   },
   realname: {
    type:String
   },
  address:{
      type: String
    },
})
const vendor = mongoose.model('Vendor', vendorSchema);
module.exports=vendor;

const shipperSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  password: {
    type: String, 
    require: true,
     minlength: 8
   },
})
const shipper = mongoose.model('Shipper', shipperSchema);
module.exports=shipper;

const login_infoSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: customer},
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: vendor },
  shipper: { type: mongoose.Schema.Types.ObjectId, ref: shipper },
})
const login_info = mongoose.model('Login Info', login_infoSchema);
module.exports=login_info;


const productSchema = new mongoose.Schema({
  product_name:{
    type: Number,
    required: true
  },
  price: {
    type: Number, 
    require: true
   },
  product_description:{
      type: String
    },
})
const product = mongoose.model('Product', productSchema);
module.exports=product;

