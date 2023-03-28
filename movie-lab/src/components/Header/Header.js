import React, { useState } from 'react'
import './Header.scss'
import { server } from '../../server';

export default function Header({ result }) {
    const [inputKey, setInputKey] = useState('');
    const [isActive, setIsActive] = useState();
    
    const focusHandler = () => {
        setIsActive('active')
    }

    const blurHandler = () => {
        setIsActive('');
    }

    const submitHandler = (e) => {
        e.preventDefault()
    }

    const onChangeHandler = e => {
        setInputKey(e.target.value)
        server.findMovie( inputKey, result )
    }

    return (
        <div className='header'>
            <div className='header__logo'>
                <span>Movie Lab</span>
            </div>
            <div className='header__search-panel'>
                <form onSubmit={e => submitHandler(e)}>
                    <input 
                        className={isActive}
                        type='text' 
                        placeholder='Type to search...'
                        value={inputKey}
                        onChange={e => onChangeHandler(e)}
                        onFocus={focusHandler}
                        onBlur={blurHandler}
                        >
                    </input>
                </form>
            </div>
        </div>
    )
}
