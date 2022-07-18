const mongoose=require('mongoose')

const address2Schema=new mongoose.Schema({
  state:{
    type:String,
    required:[true,"Siz state kiritishingiz kerak !"]
  },
  street:{
    type:String,
    required:[true,"Siz street kirtishingiz kerak !"]
  },
  zip:{type:String},
  owners:[{
    type:mongoose.Schema.ObjectId,
    ref:'person2'
  }]
})

const person2Schema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Siz name kiritishingiz kerak !"]
  },
  age:{
    type:Number,
    required:[true,"Siz age kirtishingiz kerak !"]
  },
  address:[{
    type:mongoose.Schema.ObjectId,
    ref:'address2'
  }]
})

const Person2=mongoose.model('person2',person2Schema)

const Address2=mongoose.model('address2',address2Schema)

module.exports={Person2,Address2}