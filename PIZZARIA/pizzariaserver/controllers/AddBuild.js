const Test = require("../models/BuildModel");
exports.test_list = async function(req,res){
    try {
    const item = new Test({
        user: req.user.id, 
        name: req.body.name,
        image: req.body.image,
        ingredients: req.body.ingredients,
        count: 1,
        price: req.body.price
    });
    item.save()
        .then((savedItem) => res.status(201).json(savedItem))
        .catch((err) => res.status(400).send("Error saving item"));
}
catch (err) {
    res.status(400).send("Error saving item");
}
};



