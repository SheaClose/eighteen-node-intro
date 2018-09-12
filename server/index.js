const express = require("express"),
  app = express(),
  port = 3001,
  bodyParser = require("body-parser"),
  movieCtrl = require("./controllers/movieCtrl");

app.use(bodyParser.json());

app.get("/api/movies", movieCtrl.readMovies);
app.get("/api/movies/:index", movieCtrl.readMovieByIndex);
app.post("/api/movies", movieCtrl.createMovie);

app.listen(port, () =>
  console.log(`This is Dr Crane I'm listening... ${port}`)
);
