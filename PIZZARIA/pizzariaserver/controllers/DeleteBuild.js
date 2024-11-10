const Test = require("../models/BuildModel");
exports.test_list = function(req,res){
    var val = req.params.id;
    Test.findByIdAndDelete(val)
    .then((tests) => res.json(tests))
    .catch((err) => res.status(500).send("Internal server error"))
};



