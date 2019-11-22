import React, { Component } from "react";
import axios from "axios";
//import styled from "styled-components";

/* const StyledInput = styled.input`
border: 1px solid black;
border-radius: 9px;
margin: 1em 0;
padding: 1em;
` */
// replace <input/> with <StyledInput/>

export default class AddMovieForm extends Component {
  state = {
    movieTitle: "",
    movieDirector: "",
    movieYear: "",
    isNominated: false,
    actors: [],
    movieGenre: []
  };

  onFormSubmit = async event => {
    event.preventDefault();
    const movie = await axios.post(
      "https://whispering-stream-19572.herokuapp.com/movies",
      {
        title: this.state.movieTitle,
        year: this.state.movieYear,
        director: this.state.movieDirector,
        genre: this.state.movieGenre,
        isNominated: this.state.isNominated,
        actors: this.state.actors
      }
    );
    console.log(movie);
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group">
              <label htmlFor="movieTitle">Movie Title</label>
              <input
                required
                type="text"
                className="form-control"
                id="movieTitle"
                aria-describedby="emailHelp"
                placeholder="Enter title here"
                onChange={event =>
                  this.setState({ movieTitle: event.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="movieDirector">Movie Director</label>
              <input
                type="text"
                className="form-control"
                id="movieDirector"
                placeholder="Enter director here"
                onChange={event =>
                  this.setState({ movieDirector: event.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="movieYear">Release Year</label>
              <input
                type="number"
                className="form-control"
                id="movieYear"
                placeholder="Enter release year here"
                onChange={event =>
                  this.setState({ movieYear: event.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="movieGenres">Movie Genres</label>
              <input
                type="text"
                className="form-control"
                id="movieGenres"
                placeholder="Enter genres here with a comma in between each"
                onChange={event =>
                  this.setState({ movieGenre: event.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="movieActors">Movie Actors</label>
              <input
                type="text"
                className="form-control"
                id="movieActors"
                placeholder="Enter actors here"
                onChange={event =>
                  this.setState({ actors: event.target.value })
                }
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="isNominated"
                onChange={event =>
                  this.setState({ isNominated: event.target.checked })
                }
              />
              <label className="form-check-label" htmlFor="isNominated">
                The movie is nominated for an award
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
