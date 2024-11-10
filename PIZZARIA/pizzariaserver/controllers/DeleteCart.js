const Test = require("../models/CartModel");
exports.test_list = function(req,res){
    var val = req.params.id;
    Test.findOneAndDelete({id:val})
    .then((tests) => res.json(tests))
    .catch((err) => res.status(500).send("Internal server error"))
};



