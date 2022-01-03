const mongoose = require('mongoose');

const Movie = mongoose.model('Movie', {
  title: {
    type: String,
    required: true,
  },
  rated: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

module.exports = Movie;
