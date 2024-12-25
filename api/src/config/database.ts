import mongoose from 'mongoose';
import { insertProducts } from '../migrations/perfumes-migration';

export const connectDatabase = async () => {
  try {
    const dbClient = await mongoose.connect(process.env.MONGO_URI);
    await insertProducts();
    console.log(`Mongo DB connected successfully: ${dbClient.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
