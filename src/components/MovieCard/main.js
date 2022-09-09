import React from 'react';
import './main.css'

export function MovieCard ({ movie }){
  const imageURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <li className='movieCard'>
      <img 
      className='movieImage'
      alt='imagen de la pelicula' 
      src= {imageURL} />
      <div>{movie.title}</div>
    </li>
  );
}