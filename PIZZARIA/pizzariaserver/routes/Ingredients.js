var express = require('express');
var router = express.Router();
const test_controller = require("../controllers/IngredientsController");


router.get("/ingredients", test_controller.test_list);

module.exports = router;
