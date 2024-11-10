const Test = require("../models/IngredientsModel");
exports.test_list = function(req,res){
    Test.find()
    .then(function(tests){
        res.json(tests);
    })
    .catch((err) => res.status(500).send("Internal server error"))
};