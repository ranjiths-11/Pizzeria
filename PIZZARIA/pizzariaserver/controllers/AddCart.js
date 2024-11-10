const Test = require("../models/CartModel");
const PTest = require("../models/PizzaModel");
exports.test_list = async function(req,res){
    var data;
    try {
        data = await PTest.find({ id: req.params.id });
        if (data.length === 0) {
            return res.status(404).send("No data found");
        }

    const item = new Test({
        id: req.params.id,
        user:req.user.id,
        name: data[0].name,
        price: data[0].price,
        image: data[0].image,
        count: req.params.count
    });
    item.save()
        .then((savedItem) => res.status(201).json(savedItem))
        .catch((err) => res.status(400).send("Error saving item"));
}
catch (err) {
    res.status(400).send("Error saving item");
}
};



