// MovieList.js
import React from 'react';

function MovieList({ movies, onSelectMovie }) {
  return (
    <div className="movie-list">
      <div className="movie-cards">
        {movies.map(movie => (
          <div key={movie.imdbID} className="movie-card" onClick={() => onSelectMovie(movie.imdbID)}>
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-info">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;

