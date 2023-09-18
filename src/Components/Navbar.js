import React, { useState } from 'react';
import '../Styles/Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'


function Navbar() {
    const [state, setState] = useState(false)

    return (
        <div className="Navbar">
            <header className={state === false ? 'header' : 'header1'}>
                <ul>
                    <li><h4 className={state === false ? 'brand' : 'brand1'}>Just Easy</h4></li>
                    <div className={state === false ? 'lists' : 'lists1'}>
                        <li className={state === false ? 'list' : 'list1'}><a href="/#">Home</a></li>
                        <li className={state === false ? 'list' : 'list1'}><a href="/#">About</a></li>
                        <li className={state === false ? 'list' : 'list1'}><a href="/#">Service</a></li>
                        <li className={state === false ? 'list' : 'list1'}><a href="/#">Gallery</a></li>
                        <li className={state === false ? 'list' : 'list1'}><a href="/#">Contact</a></li>
                    </div>
                    <span onClick={() => setState(!state)}><GiHamburgerMenu /></span>
                </ul>
            </header>
        </div >
    );
}

export default Navbar;
