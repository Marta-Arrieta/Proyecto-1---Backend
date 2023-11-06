import mongoose from 'mongoose';

export default class DB {
  connectDB() {
    mongoose
      .connect('mongodb+srv://cluster0.jnp7asc.mongodb.net/', {
        dbName: 'delivery',
        user: 'test',
        pass: 'testeo',
      })
      .then(() => console.log('database connected'))
      .catch((error) => console.log('Error: ', error));
  }
}
