import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }
  componentDidMount() {
    axios.get("/api/movies").then(response => {
      this.setState({ movies: response.data });
    });
    // axios.get('http://localhost:3001/api/movies')
  }

  render() {
    let movies = this.state.movies.map(c => <div>{c}</div>);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {movies}
      </div>
    );
  }
}

export default App;
