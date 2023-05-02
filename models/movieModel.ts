import mongoose from 'mongoose';

let stringRequire = { type: String, require: true };

const movieSchema = new mongoose.Schema({
  title: stringRequire,
  thumbnail: {
    trending: {
      small: String,
      large: String,
    },
    regular: {
      small: String,
      medium: String,
      large: String,
    },
  },
  year: {
    type: Number,
    require: true,
  },
  category: stringRequire,
  rating: stringRequire,
  isBookmarked: Boolean,
  isTrending: Boolean,
});

export default mongoose.models.Movies ||
  mongoose.model('Movies', movieSchema);
