import React from 'react'

import './MovieCars.scss'
import { server } from '../../server';

export default function MovieCard({id, title, img}) {
    const IMG_PATH = 'https://image.tmdb.org/t/p/w500/'
    const handleClick = (movieId) => {
        server.getDetails(movieId);
    };
    return (
        <div className='movie-card' onClick={() => handleClick(id)}>
            {img ? 
                <img  className='movie-poster' src={ IMG_PATH + img } alt={ title }/> 
                :
                <div className='movie-poster-plug'>
                    <span>No image</span>
                </div>}
            <h4 className='movie-title'>
                {title}
            </h4>
        </div>
    )
}
