const Test = require("../models/UserModel");
exports.test_list = function(req,res){
    Test.findOneAndUpdate({username:req.body.username},
        {$set: 
            {
                name : req.body.name,
                email : req.body.email,
                phone : req.body.phone,
                address : req.body.address
            }
    })
    .then((tests) => res.json(tests))
    .catch((err) => res.status(500).send("Internal server error"))
};



