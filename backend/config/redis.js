import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

const client = createClient({
  url: process.env.REDIS_URI
});

client.on('error', (err) => console.log('Redis Client Error', err));

const connectRedis = async () => {
  try {
    await client.connect();
    console.log('Redis connected');
  } catch (error) {
    console.error('Redis connection error:', error);
    process.exit(1);
  }
};

export { client, connectRedis };
