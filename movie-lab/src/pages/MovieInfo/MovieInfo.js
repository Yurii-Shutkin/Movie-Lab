import React from 'react'
import YouTube from 'react-youtube'
import fcImg from './fc-img.png'
import './MovieInfo.scss'

export default function MovieInfo() {
    const opts = {
        width: '780',
        height: '415'
    }

    const detailsInfo = [
        {itemName: 'Rating:'},
        {itemName: 'Genre:'},
        {itemName: 'Rating:'},
        {itemName: 'Original Rating:'},
        {itemName: 'Director:'},
        {itemName: 'Producer:'},
        {itemName: 'Writer:'},
        {itemName: 'Release Date:'},
        {itemName: 'Box Ofice:'},
        {itemName: 'Distributor:'},
        {itemName: 'Sound Mix:'},
        {itemName: 'Aspect Ratio:'},
    ]

    const data = [
        {
            img: null,
            name: 'Edwart Norton',
            hero: 'Narrator'
        },
        {
            img: null,
            name: 'Edwart Norton',
            hero: 'Narrator'
        },
        {
            img: null,
            name: 'Edwart Norton',
            hero: 'Narrator'
        },
        {
            img: null,
            name: 'Edwart Norton',
            hero: 'Narrator'
        },
        {
            img: null,
            name: 'Edwart Norton',
            hero: 'Narrator'
        },
        {
            img: null,
            name: 'Edwart Norton',
            hero: 'Narrator'
        },
        {
            img: null,
            name: 'Edwart Norton',
            hero: 'Narrator'
        },
    ]

    const recData = [
        {
            img: null,
            name: 'Avatar'
        },
        {
            img: null,
            name: 'Avatar'
        },
        {
            img: null,
            name: 'Avatar'
        },
        {
            img: null,
            name: 'Avatar'
        },
        {
            img: null,
            name: 'Avatar'
        },
    ]

    return (
    <div className='movie container'>
        <div className='movie-card'>
            <h2 className='movie-title'>
                Fight Club
            </h2>
            <div className='movie-trailer'>
                <div className='movie-poster'>
                    <img src={fcImg} alt='fc-img'/> 
                </div>
                <YouTube opts={opts}/>
            </div>
            <div className='movie-desc'>
                <span>
                    A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.
                </span>
            </div>
        </div>
        <div className='cast'>
            <h3 className='cast-title'>Cast</h3>
            <div className='cast-cards'>
                {data.map(act => {
                    return (
                        <div className='cast-card'>
                            {act.img ? act.img : <div className='cast-plug'>No photo</div>}
                            <h4 className='cast-name'>{act.name}</h4>
                            <span className='cast-hero'>{act.hero}</span>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='details'>
            <h3 classname='details-title'>Details</h3>
            <div className='details-info'>
                {detailsInfo.map(item => {
                    return (
                        <p classname='details-item'>{item.itemName}</p>
                    )
                })}

            </div>
        </div>
        <div className='recomendations'>
                <h3 className='recomendations-title'>Recomendations</h3>
                <div className='recomendations-cards'>
                    {recData.map(rec => {
                        return(
                            <div className='recomendations-card'>
                                {rec.img ? rec.img : <div className='cast-plug'>No poster</div>}
                                <p className='recomendations-name'>{rec.name}</p>
                            </div>
                        )
                    })}
                </div>
        </div>
    </div>
    )
}
