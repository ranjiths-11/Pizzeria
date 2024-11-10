const Test = require("../models/CartModel");
const BTest = require("../models/BuildModel");
exports.test_list = function(req,res){
    Promise.all([Test.find({"user":req.user.id}), BTest.find({"user":req.user.id})])
    .then(([test1,test2]) => {
        let arr = [];
        arr.push(test1); arr.push(test2);
        res.json(arr);
    })
    .catch((err) => res.status(500).send("Internal server error"))
};




