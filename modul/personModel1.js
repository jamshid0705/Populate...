const mongoose=require('mongoose')

const address1Schema=new mongoose.Schema({
  state:{
    type:String,
    required:[true,"Siz state kiritishingiz kerak !"]
  },
  street:{
    type:String,
    required:[true,"Siz street kirtishingiz kerak !"]
  },
  zip:{type:String}
})

const person1Schema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Siz name kiritishingiz kerak !"]
  },
  age:{
    type:Number,
    required:[true,"Siz age kirtishingiz kerak !"]
  },
  address:{
    type:mongoose.Schema.ObjectId,
    ref:'address1'
  }
})

const Person1=mongoose.model('person1',person1Schema)

const Address1=mongoose.model('address1',address1Schema)

module.exports={Person1,Address1}