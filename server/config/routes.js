const moviesController = require('../controllers/movies.controller');
const router = require('express').Router();
const path = require('path');

module.exports = router

  .get('/api', moviesController.index)
  .post('/api', moviesController.create)
  .put('/api/:movie_id', moviesController.update)
  .get('/api/:movie_id', moviesController.show)
  .delete('/api/:movie_id', moviesController.destroy)
