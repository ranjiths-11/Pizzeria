const Test = require("../models/UserModel");
exports.test_list = function(req,res){
    Test.find({"_id":req.user.id})
    .then((test) => {
        res.json(test);
    })
    .catch((err) => res.status(500).send("Internal server error"))
};




