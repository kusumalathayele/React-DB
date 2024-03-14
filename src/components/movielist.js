

// MovieList.js
import React from 'react';

function MovieList({ movies, onSelectMovie, loading }) {
  return (
    <div className="movie-list">
      <div className="movie-cards">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : movies && movies.length > 0 ? (
          movies.map(movie => (
            <div key={movie.imdbID} className="movie-card" onClick={() => onSelectMovie(movie.imdbID)}>
              <img src={movie.Poster} alt={movie.Title} />
              <div className="movie-info">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
              </div>
            </div>
          ))
        ) : (
          <p className='p'>No movies found.</p>
        )}
      </div>
    </div>
  );
}

export default MovieList;
