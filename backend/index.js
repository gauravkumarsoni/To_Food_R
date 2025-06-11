const dotenv = require('dotenv');
dotenv.config({
  path:'./.env'
});
const express = require('express');
const app = express();
const port = 5000;
const mongoDb = require("./db");


mongoDb();


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});



app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/api', require("./Routes/CreatUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/orderData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
