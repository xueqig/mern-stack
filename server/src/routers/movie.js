const express = require('express');
const Movie = require('../models/movie');
const router = new express.Router();

router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find({}).limit(20);
    res.send(movies);
  } catch (e) {
    res.status(500).send();
  }
});

router.get('/movies/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const movie = await Movie.findOne({ _id });
    if (!movie) {
      res.status(404).send({ message: 'Movie cannot be found!' });
    }

    res.send(movie);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
