var express = require('express');
var router = express.Router();
const test_controller = require("../controllers/PizzaController");


router.get("/pizzas", test_controller.test_list);

module.exports = router;
