import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const movieList = movies.map((movie,index) =>
    <div key={index}>
      <h3>Title: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
          <ul>
            {movie.genres.map((genre,index) => <li key={index}>{genre}</li>)}
          </ul>
    </div>
  )

  return (
    <div>
      <h1>Movies Page</h1>
          {movieList}
    </div>
  );
};

export default Movies;
