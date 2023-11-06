import express from 'express';
import userRouter from './user/user.router.js';
import restaurantRouter from './restaurant/restaurant.router.js';
import productRouter from './product/product.router.js';
import orderRouter from './order/order.router.js';
import DB from './db/connect.js';

const db = new DB();

const app = express();
const port = process.env.port || 3001;

app.use(express.json());
app.use('/user', userRouter);
app.use('/restaurant', restaurantRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);

try {
  db.connectDB();
  app.listen(port);
  console.log('server running on http://localhost:' + port);
} catch (error) {
  console.log(error);
}
