import fs from 'fs';
import path from 'path';
import Perfume from '../models/product';

export const insertProducts = async () => {
  try {
    const count = await Perfume.countDocuments();

    if (count === 0 && process.env.NODE_ENV !== 'production') {
      const dataPath = path.join(__dirname, '../data', 'perfumes.json');
      const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

      await Perfume.insertMany(jsonData);
      console.log('Initial data has been inserted into the collection.');
    } else {
      console.log('Initial data already exists in the collection.');
    }
  } catch (error) {
    console.log(`An error has ocurred: ${error}`);
  }
};
