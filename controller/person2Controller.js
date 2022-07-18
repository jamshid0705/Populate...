const {Person2,Address2}=require('../modul/personModel2')
const catchError = require('../utility/catchError')

const getAllPerson2=catchError(async(req,res)=>{
  const person2=await Person2.find().populate({
    path:'address',
    select:"-__v"
  })

  res.status(200).json({
    data:person2
  })
})

const addPerson2=catchError(async(req,res)=>{
  const person2=await Person2.create(req.body)

  res.status(200).json({
    data:person2
  })
})

const getAllAddress2=catchError(async(req,res)=>{
  const address2=await Address2.find().populate({
    path:"owners",
    select:'-__v'
  })

  res.status(200).json({
    data:address2
  })
})

const addAddress2=catchError(async(req,res)=>{
  const address2=await Address2.create(req.body)

  res.status(200).json({
    data:address2
  })
})

module.exports={getAllPerson2,addAddress2,getAllAddress2,addPerson2}