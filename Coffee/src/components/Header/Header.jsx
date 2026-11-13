import React from 'react'
import './Header.css'

function Header(){

    return (
        <>
            <header>
                <div className="nav-bar">
                    <h1 className='logo'>Coffee</h1>
                    <div className="nav-link">
                        <ul>
                            <li><a href="#About">About</a></li>
                            <li><a href="#Feachers">Feachers</a></li>
                            <li><a href="#Contacts">Contuct</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )

}

export default Header