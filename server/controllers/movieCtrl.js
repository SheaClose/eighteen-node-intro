let movies = [
  "Jurassic Park",
  "Star Wars",
  "Star Trek",
  "Dark Knight",
  "Infinity War"
];

module.exports = {
  readMovies(req, res) {
    if (req.query.q) {
      let filtered = movies.filter(movie => {
        return movie.toLowerCase().includes(req.query.q.toLowerCase());
      });
      return res.status(200).json(filtered);
    }
    return res.status(200).json(movies);
  },
  readMovieByIndex(req, res) {
    let index = req.params.index;
    return res.status(200).json(movies[+index]);
  },
  createMovie(req, res) {
    movies.push(req.body.title);
    return res.status(200).json(movies);
  }
};
