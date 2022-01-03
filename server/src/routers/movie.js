const express = require('express');
const Movie = require('../models/movie');
const router = new express.Router();

router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.send(movies);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
