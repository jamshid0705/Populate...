const express=require('express')
const appError = require('./utility/appError')
const personRout=require('./Router/personRout')
const personRout1=require('./Router/personRout1')


const app=express()

app.use(express.json())


app.use('/person',personRout)
app.use('/person1',personRout1)


app.all('*',function(req,res,next){
  next(new appError('Bunday page mavjud emas !'))
})

app.use((err,req,res,next)=>{
  err.status=err.status || 'fail',
  err.statusCode=err.statusCode || 404,
  err.message=err.message || "Not found !"

  res.status(err.statusCode).json({
    status:err.status,
    message:err.message,
    stack:err.stack
  })
  next()
})

module.exports=app