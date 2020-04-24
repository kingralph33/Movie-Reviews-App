'use strict';

const Movie = require('mongoose').model('Movie');
const { Http } = require('@status/codes');

module.exports = {
  // get all movies
  async index(req, res) {
    try {
      const movie = await Movie.find({});
      res.json(movie);
    } catch (error) {
      res.status(Http.NotFound).json(error);
    }
  },

  // show details of movie
  async show(req, res) {
    const { movie_id: movieId } = req.params;

    try {
      const movie = await Movie.findById(movieId);
      console.log("This is the movie info from the server controller: ", movie)
      res.json(movie);
    } catch (error) {
      res.status(Http.NotFound).json(error);
    }
  },

  // create new movie
  async create(req, res) {
    console.log("Creating this data: ", req.body);
    try {
      const movie = await Movie.create({
        title   : req.body.title,
        reviews : req.body.reviews
      })
      res.json(movie);
    } catch (error) {
      const errors = Object.keys(error.errors).map(
        key => error.errors[key].message
      );
      console.log(errors)
      res.status(Http.UnprocessableEntity).json(errors);
    }
  },

  // update movie review
  async update(req, res) {
    const { movie_id: movieId } = req.params;
    console.log('This is the data getting pushed: ', req.body)
    try {
      const movie = await Movie.findByIdAndUpdate(movieId, {
        $push: {
          reviews: req.body.reviews
        }
      });
      res.json(movie);
    } catch (error) {
      const errors = Object.keys(error.errors).map(
        key => error.errors[key].message
      );

      res.status(Http.UnprocessableEntity).json(errors);
    }
  },


  // remove movie
  async destroy(req, res) {
    const { movie_id: movieId } = req.params;
    console.log('You deleted: ', req.body)
    try {
      const movie = await Movie.findByIdAndRemove(movieId);
      res.json(movie);
    } catch (error) {
      res.status(Http.NotFound).json(error);
    }
  },
};
