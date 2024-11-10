var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
const test_controller = require("../controllers/CartController");
const add_controller = require("../controllers/AddCart");
const update_controller = require("../controllers/UpdateCart");
const delete_controller = require("../controllers/DeleteCart");

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


router.get("/cart", authenticate, test_controller.test_list);
router.get("/cart/add/:id/:count",authenticate, add_controller.test_list);
router.get("/cart/update/:id/:count", update_controller.test_list);
router.get("/cart/delete/:id", delete_controller.test_list);




module.exports = router;
