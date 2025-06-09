
const express = require('express')
const router = express.Router()

router.post("/foodData", ( req, res) =>{
  try {
    console.log(global.food_item, global.foodCategory)
    res.status(200).send([global.food_item, global.foodCategory ])
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
    
  }

})
module.exports = router;