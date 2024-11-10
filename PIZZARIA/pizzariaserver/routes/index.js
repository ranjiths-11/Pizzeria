var express = require('express');
var router = express.Router();
var test1Schema=require('../models/IngredientsModel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/insert',async(req,res)=>{
  try {
      const data= req.body
      const AddProd= await new test1Schema(data)
      const finalSave = await AddProd.save()
      res.status(200).json({Message:"Succesfully Inserted",finalSave})
  } catch (error) {
      res.status('500').json({Message:"Something Went Wrong"})
  }
     
});

module.exports = router;
