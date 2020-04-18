var express=require("express");
var router = express.Router();
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/db',{ useNewUrlParser: true ,useUnifiedTopology: true}); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded"); 
})
var app=express();
// app.use(function(req,res){
// 	res.header("Access-Control-Allow-Origin","*")
// 	res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Context-Type, Accept");
// 	res.header("Access-Control-Allow-Methods",'PUT,POST,GET,DELETE,OPTIONS');
// 	next();
// });

// var users=[
// 	{
// 		name:'rahul',
// 		email:'Ujjawala397@gmail.com',
// 		password:'12345',
// 		phone:'9876543210'
// 	}
// ]

router.post('/signup', function(req,res){ 
	var name = req.body.name;
	var email =req.body.email;
	var pass = req.body.password;
	var phone =req.body.phone;

	var data = { 
		"name": name, 
		"email":email, 
		"password":pass, 
		"phone":phone 
	} 
db.collection('details').insertOne(data,function(err, collection){
		if (err) throw err;
		res.send({
			message:"record inserted succesfully"
		})
		console.log("Record inserted Successfully");
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to backend");
});


})

module.exports = router;


