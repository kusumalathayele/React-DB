
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

  useEffect(() => {
    fetchRandomGenreMovies();
  }, []);

  const fetchRandomGenreMovies = async () => {
    try {
      const genres = ['action', 'comedy', 'drama', 'romance', 'horror'];
      const randomGenre = genres[Math.floor(Math.random() * genres.length)];
      await fetchMovies(randomGenre);
    } catch (error) {
      console.error('Error fetching random genre movies:', error);
    }
  };

  const fetchMovies = async (genre) => {
    try {
      const response = await axios.get(`${API_URL}&s=${genre}`);
      setMovies(response.data.Search);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const fetchMovieDetails = async (imdbID) => {
    try {
      const response = await axios.get(`${API_URL}&i=${imdbID}`);
      setSelectedMovie(response.data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  const closeMovieDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="container">
      <h1>Movie Search</h1>
      <SearchBar onSearch={fetchMovies} />
      {selectedMovie && <MovieDetails movie={selectedMovie} onClose={closeMovieDetails} />}
      <MovieList movies={movies} onSelectMovie={fetchMovieDetails} />
    </div>
  )
}

export default App;

