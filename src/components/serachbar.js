// SearchBar.js
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search for a movie..." style={{backgroundColor:"lightblue"}}/>
      <button type="submit" style={{backgroundColor:"lightpink"}}>Search</button>
    </form>
  )
}
export default SearchBar;
