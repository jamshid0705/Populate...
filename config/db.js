const mongoose=require('mongoose')

mongoose.connect(process.env.DATABASE_URL,{}).then(()=>{
  console.log("Databasega ulandi !")
}).catch(err=>{
  console.log('Databasega ulanishda xatolik !')
})

module.exports=mongoose
