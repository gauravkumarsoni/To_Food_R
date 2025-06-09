

const mongoose = require('mongoose');

const mongoDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://gaurav210:gaurav%40210@cluster0.k8tchx9.mongodb.net/tofood?retryWrites=true&w=majority&appName=Cluster0', {

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