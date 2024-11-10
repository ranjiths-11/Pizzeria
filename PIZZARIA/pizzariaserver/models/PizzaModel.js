const mongoose = require("mongoose");
var Schema = mongoose.Schema;


var test2Schema = new Schema({
    id: {type:String, required: true },
    type: {type:String, required: true },
    price: {type:Number, required: true },
    name: {type:String, required: true },
    image: {type:String, required: true },
    description: {type:String, required: true },
    ingredients: {type:[String], required: true },
    topping: {type:[String], required: true },
})

/*
var test1Schema = new Schema({
    name: {type:String, required: true },
    age: {type:Number, required: true },
    desc: {type:String, required: true },
})
*/
module.exports = mongoose.model("pizzatests",test2Schema);