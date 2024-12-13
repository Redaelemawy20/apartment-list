import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1); // Exit the process if the connection fails
  }
};

export default connectDB;
