const mongoose = require("mongoose");
var Schema = mongoose.Schema;


var test5Schema = new Schema({
    id: {type:String, required: true },
    user: {type: Schema.Types.ObjectId, ref:'users'},
    name: {type:String, required: true },
    price: {type:Number, required: true },
    image: {type:String, required: true },
    count: {type:Number, required: true },
})
module.exports = mongoose.model("cart3",test5Schema);