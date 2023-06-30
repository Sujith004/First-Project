const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser())

const port=3000; 
const cars=[]
app.post("/create-cars",(req,res)=> {
    // random id 
    // create object and spread the random id and the data from the body
    // finally push the obj to array 
    
   
    
    const obj={
        id:Math.floor(Math.random()*(999-100)+100),
        ...req.body
    };
    console.log(obj)
cars.push(obj)

res.send(
    'car created successfully'
)
}
)
app.get('/get-car', (req, res) => {
    const data = req.body
    console.log(data)
    const car = cars.filter((car) => car.id === data.id)
    console.log(car)
     res.send (
        {
            data: car
        }
     )
})

app.get('/get-cars', (req, res) => {
  
   
     res.send (
        {
            data: cars
        }
     )
})
app.get('/update-car',(req,res)=> {
    const data=req.body
  
    const selectedCar=cars.find((car)=> car.id === req.body.id)

    if(!selectedCar){res.send({
        message:"The car to update doesn't exists"
    })}

    selectedCar.name= data.name;
    res.send(
    {
        data:cars
    }
    )
})
app.listen(port,()=>{
    console.log('Server initiated')
})