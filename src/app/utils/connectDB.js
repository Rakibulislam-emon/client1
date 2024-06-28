import { MongoClient } from "mongodb";

let db;

export const getDb = async () => {
  if (db) {
    return db;
  }
  try {
    const uri = process.env.MONGO;
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db('test');
    return db;
  } catch (error) {
    console.log('error from connect db:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};
