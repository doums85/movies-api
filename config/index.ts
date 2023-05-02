import mongoose from 'mongoose';

const dbConnect = () => {
  mongoose.connect(
    'mongodb+srv://admin:admin@cluster0.whoer.mongodb.net/movies?retryWrites=true&w=majority'
  );
};

export default dbConnect;
