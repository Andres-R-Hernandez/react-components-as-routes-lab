import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovies = () => {
    return movies.map(movie=>(
      <div>
        <h3>Name: {movie.title}</h3>
        Time: {movie.time}
        <br></br>
        <br></br>
        Genres:
        <br></br>
        <ul>
          {movie.genres.map(genre=><li>{genre}</li>)}
        </ul>
      </div>
    ))
  }
  
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
