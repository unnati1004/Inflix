const express = require('express');
const app = express();
const cors = require('cors'); 
const items = require('./controllers/items_controller');
const cart = require('./controllers/cart_controller');
app.use(express.json());
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.use('/itemsArray',items);
app.use('/',cart)
const port = 2345;
app.listen(port, async () => {
  try {
    console.log(`listening on port ${port}`);
  } catch (err) {
    console.error(err.message);
  }
  
});