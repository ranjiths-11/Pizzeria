var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
const add_build = require("../controllers/AddBuild");
const delete_build = require("../controllers/DeleteBuild");
const update_build = require("../controllers/UpdateBuild");
const authenticate = (req,res,next)=>{
    const token = req.headers['authorization'];
    if(!token) return res.status(401).json({error: 'Access denied' });
    try{
        const verified = jwt.verify(token, 'your_jwt_secret');
        req.user = verified;
        console.log(req.user.id);
        next();
    }
    catch{
        res.status(400).json({error: 'Invalid token' });
    }
};


router.post("/build", authenticate, add_build.test_list);
router.get("/build/delete/:id", delete_build.test_list);
router.get("/build/update/:id/:count", update_build.test_list);




module.exports = router;
