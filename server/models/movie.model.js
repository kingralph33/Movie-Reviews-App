const mongoose = require('mongoose');
const { Schema } = mongoose;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [3, 'The movie title must be 3 characters or more']
  },
  reviews: [{
    userName: {
      type: String,
      required: true,
      minlength: [3, 'Your name must be 3 characters or more']
    },
    rating: {
      type: Number,
      required: true,
      min: [1, 'Minimum rating is 1'],
      max: [5, 'Maximum rating is 5']
    },
    review: {
      type: String,
      required: true,
      minlength: [3, 'The movie review must be 3 characters or more']
    }
  }]
},
{
  timestamps: true
}
)

module.exports = mongoose.model('Movie', MovieSchema);
