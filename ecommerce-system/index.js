const express = require('express');
const app = express();//get the object of express out
const port = 3000;
const ejs=require('ejs')
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const User = require('./models/User');
const passwordHash = require("password-hash");

app.set('view engine', 'ejs');
//set up view engine to ejs
app.use(express.static('public'));
//when working with the POST method have to include the URLENCODED
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://Luy:mypassword@cluster0.tv3wrar.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log(error.message));

app.get("/", (req, res) => {
    res.render("login");
});
app.get("/home", (req, res)=>{
    res.render("home");
})

//GET
app.get('/', (req, res)=>{
    res.render('login');
})

//CUSTOMER REGISTER PAGE
app.get("/customer-register", (req, res)=> {
    res.render("customer-register");
})
app.post("/customer-register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: passwordHash.generate(req.body.password),
        realname: req.body.realname,
        address: req.body.address,
        role: req.body.role,
    });

    try {
        const savedUser = await newUser.save();
        res.redirect("/");
    } catch (err) {
        res.redirect("/customer-register");
    }
});
//VENDOR REGISTER
app.get("/vendor-register", (req, res)=> {
    res.render("vendor-register");
})
app.post("/vendor-register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: passwordHash.generate(req.body.password),
        realname: req.body.realname,
        address: req.body.address,
        role: req.body.role,
    });

    try {
        const savedUser = await newUser.save();
        res.redirect("/");
    } catch (err) {
        res.redirect("/vendor-register");
    }
});
//SHIPPER REGISTER
app.get("/shipper-register", (req, res)=> {
    res.render("shipper-register");
})
app.post("/shipper-register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: passwordHash.generate(req.body.password),
        realname: req.body.realname,
        address: req.body.address,
        role: req.body.role,
    });

    try {
        const savedUser = await newUser.save();
        res.redirect("/");
    } catch (err) {
        res.redirect("/shipper-register");
    }
});

//LOGIN USER 
app.post("/login", async (req, res) => {
    try {
        
        const user = await User.findOne({username: req.body.username});
        if(!user){
            res.status(400).send('User is not existed, Please create your account');
        }

        const originalPassword = passwordHash.verify(req.body.password, user.password);

        if(originalPassword === false){
            res.status(400).send("Wrong Password");
        } else{
            if(user.role === "customer"){
                res.render('home');
            }
        }
        
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
})

