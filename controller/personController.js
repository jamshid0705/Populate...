const Person=require('../modul/personModel')
const catchError=require('../utility/catchError')

const getAllPerson=catchError(async(req,res)=>{
   const person=await Person.find()

   res.status(200).json({
    status:'success',
    data:person
   })
})

const addPerson=catchError(async(req,res)=>{
  const person=await Person.create(req.body)

  res.status(200).json({
    status:'success',
    data:person
  })
})

module.exports={getAllPerson,addPerson}