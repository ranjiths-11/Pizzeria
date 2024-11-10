const mongoose = require("mongoose");
var Schema = mongoose.Schema;


var test1Schema = new Schema({
    id: {type:Number, required: true },
    tname: {type:String, required: true },
    price: {type:Number, required: true },
    image: {type:String, required: true },
})

module.exports = mongoose.model("ingredients",test1Schema);