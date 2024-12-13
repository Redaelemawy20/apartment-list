import app from './app';
import dotenv from 'dotenv';
import connectDB from './database/connection';
dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;
console.log(PORT);

app.listen(PORT, () => {
  console.log(`Server running  http://localhost:${PORT}`);
});
