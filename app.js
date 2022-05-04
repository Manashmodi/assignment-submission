var express=require('express');
const app=express();
const port =8210;
const mongo=require('mongodb');
const MongoClient=mongo.MongoClient;
//const mongourl="mongodb://localhost:27017";
const mongourl="mongodb+srv://manash:manashmodi123@cluster0.vz78n.mongodb.net/eduag?retryWrites=true&w=majority";
var db;
let client="category";

let  col_loc="location";
let resto_loc="resto";
let mail_loc="mail"


app.get('/',(req,res)=>{
    res.send("walcome to api2")
})
app.get('/location',(req,res)=>{
  db.collection(col_loc).find().toArray((err,result)=>{
    if(err) throw err;
    res.send(result)
  })
})
  app.get('/mail',(req,res)=>{
    db.collection(mail_loc).find().toArray((err,result)=>{
      if(err) throw err;
      res.send(result)
    })
})
app.get('/category',(req,res)=>{
  db.collection(client).find().toArray((err,result)=>{
    if(err) throw err;
    res.send(result)
  })
})
app.get('/resto',(req,res)=>{
  var cityId=req.query.cityId;
    db.collection(resto_loc).find({city:cityId}).toArray((err,result)=>{
      if(err) throw err;
      res.send(result)
    })
})

MongoClient.connect(mongourl,(err,client)=>{
  if(err)console.log("error while connecting ")
  db=client.db('eduag');
  app.listen(port,()=>{
    console.log(`listener on port no ${port}`)
})
})

