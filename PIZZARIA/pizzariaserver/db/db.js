const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/PIZZARIADB")
    //useNewUrlParser: true,
    //useUnifiedTopology : true,
    console.log("connected to successfully");