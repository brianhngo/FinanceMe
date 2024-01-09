import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;

// Extracting port from the database URL or nif ran locally
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Database URL: ${databaseUrl}`);
});
