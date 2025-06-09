const express = require('express')
const router = express.Router()
const Order = require('../models/Orders')

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data
    await data.splice(0, 0, { Order_date: req.body.order_date})
    let eId = await Order.findOne({'email': req.body.email})
    console.log(eId)
    if (eId === null){
        try{
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(()=>{
                res.json({success: true})
            })
        } catch (error){
            console.log(error.message)
            res.send('server Error', error.message)
        }
    }
    else{
        try{
            await Order.findOneAndUpdate(
                { email: req.body.email },
                { $push: { order_data: data } }
              )
              .then(() =>{
                res.json({ success: true})
            })
        }
        catch(error){
            console.log(error.message)
            res.send('server Error', error.message)

        }
    }

})

router.post('/myorderData', async (req, res) => {
    try {
      const email = req.body.email;
      if (!email) {
        return res.status(400).json({ error: 'Email is required' });
      }
  
      const myData = await Order.findOne({ email: email });
  
      if (!myData || !myData.order_data || !Array.isArray(myData.order_data)) {
        return res.status(404).json({ error: 'Order data not found or invalid format' });
      }
  
      
      res.json({
        orderData: {
          order_data: myData.order_data
        }
      });
    } catch (error) {
      console.error('Server Error:', error.message);
      res.status(500).send('Server Error: ' + error.message);
    }
  });
  
module.exports = router;