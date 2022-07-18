const mongoose=require('mongoose')

const addressSchema=new mongoose.Schema({
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

const personSchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Siz name kiritishingiz kerak !"]
  },
  age:{
    type:Number,
    required:[true,"Siz age kirtishingiz kerak !"]
  },
  address:addressSchema
})

const Person=mongoose.model('persons',personSchema)

module.exports=Person