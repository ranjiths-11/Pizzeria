const Test = require("../models/PizzaModel");
exports.test_list = function(req,res){
    Test.find()
    .then((tests) => res.json(tests))
    .catch((err) => res.status(500).send("Internal server error"))
};