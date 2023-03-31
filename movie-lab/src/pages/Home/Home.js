import React, { useState, useEffect } from 'react'
import './Home.scss'

import MovieCard from '../../components/MovieCard/MovieCard';
import { server } from '../../server';

export default function Home ({ findedMovies }) {
    const [movieList, setMovieList] = useState([]);
    // const [searchedMovie, setSearchedMovie] = useState([]);
    // server.findMovie(searchedTitle, searchedMovies);

    useEffect(() => {
        if( findedMovies.length > 0 ) {
            setMovieList(findedMovies);
        } else {
            server.getMovies(setMovieList);  
        }
      }, [findedMovies])

    return (
        <div className='container'>
        <div className='movies'>
            {movieList.map(movie => {
                return <MovieCard
                    key={movie.id} 
                    id={movie.id}
                    title={movie.title}
                    img={movie.poster_path}
                />
            })}
            {/* {console.log(findedMovies)} */}
        </div>
    </div>
    )
}
