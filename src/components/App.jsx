import React from "react";
// import axios from "axios";
import MovieCard from "./MovieCard.jsx";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMovies } from "../actions";
import Loading from "./Loading.jsx";

class App extends React.Component {
  /* state = {
    movies: []
  }; */

  /* getMovies = async () => {
    try {
      const response = await axios.get(
        "https://whispering-stream-19572.herokuapp.com/movies"
      );

      console.log(response.data);
      this.setState({ movies: response.data });
    } catch (error) {
      console.log(error);
    }
  }; */

  componentDidMount() {
    if (this.props.movies.length <= 0) {
      this.props.getMovies();
    }
  }

  render() {
    //console.log(this.props);
    return (
      <div className="container">
        {this.props.loading.isLoading && <Loading />}
        <div className="d-flex justify-content-center position-relative">
          <h1>Welcome to MovieX!</h1>
          <Link to={"/movies"}>
            <i
              className="plus icon huge position-absolute"
              style={{ right: 10 }}
            ></i>
          </Link>
        </div>
        <hr />
        <div className="movies card-deck">
          <div className="row">
            {this.props.movies.map(movie => {
              return <MovieCard key={movie._id} movie={movie} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    loading: state.loading
  };
};

export default connect(mapStateToProps, { getMovies })(App);
