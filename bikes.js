const bodyParser = require('body-parser');
const { log } = require('console');
const express = require('express');
const app = express();
app.use(express.json())

const port = 3000;
const bikes=[]
app.post('/create-bike',(req,res)=>{
    const obj={
        id:Math.floor(Math.random()*(999-100)+100),
        ...req.body
    };
    bikes.push(obj);
    console.log(bikes)
    res.send({
        status:'DONE',
        message: 'BIKE WAS CREATETED SUCCESSFULLY',
        bikes:bikes
    })
})
app.get('/get-bike',(req,res)=>{
    const data=  req.body
    console.log(data)
    res.send({
        data:bikes
    })
})
app.get('/update-bike',(req,res)=>{
    const data=req.body
    console.log(data)
    const changebike=bikes.find((bike)=>bike.id===req.body.id)
    console.log(changebike)
    if(!changebike) 
    {res.send({
        message:"  BIKE NOT FOUND"
    })
    }
    changebike.name=data.name
    console.log(changebike.name)
    res.send ({
        data:bikes 
    })
})
app.delete('/delete-bike',(req,res)=>{
    const data=req.body;
    console.log("data ===>",data)
    const delbike=bikes.filter((bike)=>bike.id===req.id)
    console.log(delbike)
    res.send({
        message:"BIKE REMOVED"
})
})
app.listen(port,()=>{  
    console.log('Server initiated')
})


