const personController=require('../controller/personController')
const express=require('express')

const Router=express.Router()

Router.route('/').get(personController.getAllPerson).post(personController.addPerson)

module.exports=Router