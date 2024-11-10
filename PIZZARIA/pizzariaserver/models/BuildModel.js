const mongoose = require("mongoose");
var Schema = mongoose.Schema;


var buildSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref:'users'},
    name: {type: String, required: true },
    image: {type: String, required: true },
    ingredients: {type:[String], required: true },
    count: {type:Number, required: true },
    price: {type:Number, required: true },
})


module.exports = mongoose.model("builds",buildSchema);