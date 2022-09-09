import dataMovies from '../../assets/pelis.json'
import React from "react";
import { MovieCard } from '../MovieCard/main';
import './main.css'

export function MoviesGrid({}) {

  return (
    <ul className='moviesGrid'>
      {dataMovies.map(movie => {
        return (
          <MovieCard key={movie.id} movie={movie}/>
        )
      })}
    </ul>
  );
}
