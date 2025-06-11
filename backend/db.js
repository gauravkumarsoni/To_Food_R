const dotenv = require('dotenv');
dotenv.config({
  path:'./.env'
});

const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;
// console.log(MONGO_URL);

const mongoDb = async () => {
    // const MONGO_URL = process.env.MONGO_URL;S
    // console.log(MONGO_URL);
    try {
        await mongoose.connect(MONGO_URL, {

            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');

        const foodItem = mongoose.connection.db.collection("food_item");
        const foodData = await foodItem.find({}).toArray(); 

        const foodName = mongoose.connection.db.collection("food_name");
        const catData = await foodName.find({}).toArray(); 

        global.food_item = foodData;
        global.foodCategory = catData;

        
    } catch (error) {
        console.error('Connection error:', error);
    }
};

module.exports = mongoDb;