import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MovieCard extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="card my-3">
          <div className="card-header">{this.props.movie.title}</div>
          <div className="card-body">
            {
              /* <h5 className="card-title">
            {this.props.movie.director} - {this.props.movie.year}
          </h5>*/
              <p className="card-text">
                {this.props.movie.genre.map(genre => `${genre}, `)}
              </p>
            }
          </div>
          <div className="card-footer text-muted">
            <Link
              to={`/movies/${this.props.movie._id}`}
              className="btn btn-primary float-left"
              // onClick={}
            >
              Read More >
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
