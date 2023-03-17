import React from 'react'
import './Main.scss'

export default function Main() {
  return (
    <div className='main'>
        <div className='main__content'>
            <h1 className='main__title'>
                Welcome !
            </h1>
            <span className='main__desc'>
                Here you can find information about your favorite movies or TV shows in just one click! Simply make a search query for the movie that interests you, it's so easy, start right now!
            </span>
            <button className='main__btn'>
                Get started !
            </button>
        </div>
    </div>
  )
}
