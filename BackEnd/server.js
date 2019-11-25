// Code Below contains content from Server.js from MERN LABS 
// Code has been changed and altered to suit the needs of the application.

const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://aaron:Aaronmoran2411@cluster0-8qas3.mongodb.net/purchases?retryWrites=true&w=majority';

mongoose.connect(mongoDB,{useNewUrlParser:true});

app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

app.use(cors());
app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    response.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Schema = mongoose.Schema;

//WALLET VARIABLES
const wallet = new Schema({
    amount:String,
    address:String,
})

//USER VARIABLES
const users = new Schema({
    uname:String,
    pword:String,
    btc:String,
})

const WalletModel = mongoose.model('wallet', wallet);
const UserModel = mongoose.model('users', users);


app.get('/name', (request, response) => {
    console.log(request.query.lastname)
    res.send('Welcome ' + request.query.firstname +
        ' ' + request.query.lastname);
})

//PULLING DATA FROM THE DATABASE 
app.get('/api/coins', (request, response) => {

    WalletModel.find((error, data) =>{
        response.json({coins:data});
    })
})

app.get('/api/users', (request, response) => {

    UserModel.find((error, data) =>{
        response.json({users:data});
    })
})



//DELETING - WITHDRAWING BALANCE FROM THE DATABASE
app.delete('/api/coins/:id', (request, response)=>{
    console.log(request.params.id);

    WalletModel.deleteOne({_id: request.params.id},
        (error, data) =>{
            response.json(data);
        })
})


//EDITING DATA OF USERS FROM DATABASE
app.get('/api/users/:id', (request, response)=>{
    console.log(request.params.id);

    UserModel.findById(request.params.id, (error,data)=>{
        response.json(data);
    })
})

app.put('/api/users/:id',(request,response)=>{
    console.log("Edit: "+request.params.id);
    console.log(request.body);
    
    UserModel.findByIdAndUpdate(request.params.id,
        request.body,
        {new:true},
        (error,data)=>{
            response.json(data);
        })
})


//ADDING PURCHASE TO DATABASE HISTORY
app.post('/api/coins', (request,response)=>{
    console.log('Post request Successful');
    console.log(request.body.amount);
    console.log(request.body.address);

    WalletModel.create({
        amount:request.body.amount, 
        address:request.body.address, 
    });

    response.json('post recieved!');
})

//ADDING USER DETAILS TO DATABASE HISTORY
app.post('/api/users', (request,response)=>{
    console.log('Post request Successful');
    console.log(request.body.uname);
    console.log(request.body.pword);
    console.log(request.body.btc);


    UserModel.create({
        uname:request.body.uname, 
        pword:request.body.pword,
        btc:request.body.btc,
    });

    response.json('Account Received!');
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))