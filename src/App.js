

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components/style.css';
import SearchBar from './components/serachbar';
import MovieList from './components/movielist';
import MovieDetails from './components/moviedetails';

const API_KEY = "7fcd91c";
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRandomGenreMovies();
  }, []);

  const fetchRandomGenreMovies = async () => {
    try {
      setLoading(true);
      const genres = ['action', 'comedy', 'drama', 'romance', 'horror'];
      const randomGenre = genres[Math.floor(Math.random() * genres.length)];
      await fetchMovies(randomGenre);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMovies = async (genre) => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}&s=${genre}`);
      setMovies(response.data.Search);
      console.log(response.data.Search);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMovieDetails = async (imdbID) => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}&i=${imdbID}`);
      setSelectedMovie(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const closeMovieDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="container">
      <SearchBar onSearch={fetchMovies} />
      {loading && <div className="loader">Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {selectedMovie && <MovieDetails movie={selectedMovie} onClose={closeMovieDetails} />}
      {!loading && !error && <MovieList movies={movies} onSelectMovie={fetchMovieDetails} />}
    </div>
  )
}

export default App;
