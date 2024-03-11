

import React from 'react';

function MovieDetails({ movie, onClose }) {
  return (
    <div className="movie-details">
      <img src={movie.Poster} alt={movie.Title} />
      <div>
        <h2>{movie.Title}</h2>
        <p>Year: {movie.Year}</p>
        <p>Rated: {movie.Rated}</p>
        <p>Released: {movie.Released}</p>
        <p>Runtime: {movie.Runtime}</p>
        <p>Genre: {movie.Genre}</p>
        <p>Director: {movie.Director}</p>
        <p>Plot: {movie.Plot}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default MovieDetails;
