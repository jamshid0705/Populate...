const person1Controller=require('../controller/person1Controller')

const express=require('express')
const Router=express.Router()

Router.route('/person1').post(person1Controller.person1Add).get(person1Controller.getAllPerson1)
Router.route('/address1').post(person1Controller.address1Add)

module.exports=Router