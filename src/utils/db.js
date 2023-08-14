import mongoose from 'mongoose';

// If there is an issue connecting, update mongoose version to 6.11.1

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (err) {
    throw new Error('Connection failed!');
  }
};

export default connect;
