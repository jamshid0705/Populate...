const {Person1,Address1}= require("../modul/personModel1");
const catchError = require("../utility/catchError");


const getAllPerson1=catchError(async(req,res)=>{
  const person1=await Person1.find().populate({
    path:'address'
  })
  
  res.status(200).json({
    data:person1
  })
})

const person1Add=catchError(async(req,res)=>{
  const person1=await Person1.create(req.body)

  res.status(200).json({
    data:person1
  })
})

const address1Add=catchError(async(req,res)=>{
  const address1=await Address1.create(req.body)

  res.status(200).json({
    data:address1
  })
})

module.exports={person1Add,address1Add,getAllPerson1}