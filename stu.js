const bodyParser = require('body-parser');
const { log } = require('console');
const express = require('express');
const app = express();
app.use(express.json())

const port = 3000;
const students=[]
app.post('/create-student',(req,res)=>{
    const det=req.body
    students.push(det);
    console.log(students)
    res.send({
        status:'done',
        message:'student was created',
        data:students
    })
})
app.get('/get-student',(req,res)=>{
    const data =req.body
    console.log(data)
    const view = students[0].find((v) => v.id === req.body.id);
    console.log(req.body.id);
    console.log(students,view)
    res.send(
        {
        data:view
        }
    )
})
app.get('/update-student',(req,res)=>{
    const data= req.body
    console.log(data)
    const changestudent=students[0].find((value)=>value.id===req.body.id)
    console.log(changestudent)
    if(!changestudent){
        res.send({
            message:"Student not found"
        })
    }
        changestudent.name=data.name
        console.log(changestudent.name)
        res.send({
            data:students
        })
})
app.delete('/delete-student',(req,res)=>{
    const data=req.body
    console.log(data)
    const removestudent= students[0].filter((val)=> val.id===req.body.id)
    console.log(removestudent)
    res.send({
        message:"student removed successfully"
    })
})
app.listen(port,()=>{
    console.log('server initiated')
})