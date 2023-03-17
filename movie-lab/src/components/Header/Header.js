import React, { useState } from 'react'
import './Header.scss'

export default function Header() {
    const [movieName, setMovieName] = useState('');
    const [isActive, setIsActive] = useState()
    const focusHandler = () => {
        setIsActive('active')
    }

    const blurHandler = () => {
        setIsActive('');
    }

    return (
        <div className='header'>
            <div className='header__logo'>
                <span>Movie Lab</span>
            </div>
            <div className='header__search-panel'>
                <input 
                    className={isActive}
                    type='text' 
                    placeholder='Type to search...'
                    value={movieName}
                    onChange={e => setMovieName(e.target.value)}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                    >
                </input>
            </div>
        </div>
    )
}
