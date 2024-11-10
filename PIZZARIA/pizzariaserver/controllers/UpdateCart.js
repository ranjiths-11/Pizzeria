const Test = require("../models/CartModel");
exports.test_list = function(req,res){
    var val = req.params.id;
    Test.findOneAndUpdate({id:val},{$set: {count:req.params.count}})
    .then((tests) => res.json(tests))
    .catch((err) => res.status(500).send("Internal server error"))
};



