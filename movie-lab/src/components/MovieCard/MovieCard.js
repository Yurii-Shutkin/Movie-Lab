import React from 'react'
import './MovieCars.scss'

export default function MovieCard({title, img}) {
    const IMG_PATH = 'https://image.tmdb.org/t/p/w500/'

    return (
        <div className='movie-card'>
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
