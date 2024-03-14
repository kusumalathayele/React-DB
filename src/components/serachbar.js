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
    <div className='nav'>
    <h1 className='title'>Movie Search</h1>
    <form onSubmit={handleSubmit} className='hello'>
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search for a movie..." style={{backgroundColor:"lightblue"}}/>
      <button type="submit" style={{backgroundColor:"lightpink"}} className='s'>Search</button>
    </form>
    </div>
  )
}
export default SearchBar;
