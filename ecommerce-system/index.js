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

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
})


const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://caominh:123456789WEB@cluster0.sepuobq.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log(error.message));


const customerLogin = new mongoose.Schema({
  username:{
    type: number,
    required: true
  },
  password: {
    type: string, 
    require: true
   },
  addres:{
      type: string,
      require: true
    }
})
const customer = mongoose.model('Customer', customerLogin);