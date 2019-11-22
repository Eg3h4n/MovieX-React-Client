import React, { Component } from "react";
//import axios from "axios";
import { connect } from "react-redux";
import { getMovies } from "../actions";
import Loading from "./Loading";

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: {} };

    /* if (this.props.movies.length <= 0) {
      this.props.getMovies();
    } */
  }

  /* getMovie = async id => {
    try {
      const movie = await axios.get(
        `https://whispering-stream-19572.herokuapp.com/movies/${id}`
      );
      this.setState({ movie: movie.data });
      // console.log(movie.data);
    } catch (error) {
      console.log(error);
    }
  }; */

  /* componentDidMount() {
    this.getMovie(this.props.match.params.id);
  } */

  async componentDidMount() {
    /* const movie = this.props.movies.find(
      movie => movie._id === this.props.match.params.id
    );
    this.setState({ movie: movie }); */
    // console.log(movie);
    if (this.props.movies.length > 0) {
      const movie = this.findMovie();
      this.setState({ movie: movie });
    } else {
      await this.props.getMovies();

      const movie = this.findMovie();
      this.setState({ movie: movie });
    }
  }

  /* componentDidUpdate() {
    if (this.props.movies.length > 0) {
      const movie = this.findMovie();
      this.setState({ movie: movie });
    }
  } */

  findMovie = () => {
    const movie = this.props.movies.find(
      movie => movie._id === this.props.match.params.id
    );
    return movie;
  };

  render() {
    console.log("state: ", this.state.movie);
    console.log("props: ", this.props);

    /* let movie = this.state.movie || null;
    if (this.props.movies.length > 0) {
      movie = this.findMovie();
    }
 */
    if (this.state.movie !== null) {
      return (
        <div className="container">
          <div className="jumbotron">
            <h1>{this.state.movie.title}</h1>
            <h3>{this.state.movie.director}</h3>
            <h5>{this.state.movie.year}</h5>
            <p>{this.state.movie.actors}</p>
            <hr />
            <div>
              <button
                type="button"
                className="btn btn-info float-left"
                onClick={() => this.props.history.goBack()}
              >
                Back
              </button>
              <button type="button" className="btn btn-danger float-right">
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps, { getMovies })(MoviePage);
