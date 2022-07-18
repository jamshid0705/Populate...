const person2Controller=require('../controller/person2Controller')

const express=require('express')
const Router=express.Router()

Router.route('/person2').post(person2Controller.addPerson2).get(person2Controller.getAllPerson2)
Router.route('/address2').post(person2Controller.addAddress2).get(person2Controller.getAllAddress2)

module.exports=Router