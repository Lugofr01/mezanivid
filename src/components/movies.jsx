import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/Like";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const moviesExisitng = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: moviesExisitng });
    // redirecting the new state to the nmovies
  };

  //   movie parameter since it gives us access for it to be deleted

  render() {
    const { length: count } = this.state.movies;

    if (this.state.movies.length === 0)
      return <p> There are no movies in the data base</p>;
    return (
      <React.Fragment>
        <div>
          <p>Showing {this.state.movies.length} movies in database</p>

          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like />
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-small"
                    >
                      {" "}
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;