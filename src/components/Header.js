import React from 'react'
import Button from './Button'
import Ribbon from './Ribbon'

const Header = () => {
    return (
        <header className='header'>
            Pickup App
            <Ribbon />
            <Button classname='btn-signin' text='Sign In' />
        </header>
    )
}

export default Header
