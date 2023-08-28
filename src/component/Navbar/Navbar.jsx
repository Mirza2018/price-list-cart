import React, { useState } from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const routes = [
        {
            "id": 1,
            "path": "/home",
            "name": "Home"
        },
        {
            "id": 2,
            "path": "/about",
            "name": "About"
        },
        {
            "id": 3,
            "path": "/contact",
            "name": "Contact"
        },
        {
            "id": 4,
            "path": "/products",
            "name": "Products"
        },
        {
            "id": 5,
            "path": "/services",
            "name": "Services"
        }
    ]

    const [open,setOper]=useState(false)


    return (
        <nav className='nav'>
            <div onClick={()=>setOper(!open)} className='icon'>
                {/* <button onClick={()=>setOper(!open)}> */}
                    <span>{open===false? 
                    <FontAwesomeIcon  icon={faBars} />:
                    <FontAwesomeIcon icon={faXmark} 
                    />}</span>
                    {/* </button> */}
                
                </div>
                {
                    open===true?  <div className='ancor ancor1'>
                {routes.map(route => <a href={route.path}> {route.name}</a>)}</div>
                : <div></div>
                }

                <div className='ancor ancor2' >
                {routes.map(route => <a href={route.path}> {route.name}</a>)}
                </div>

           
        </nav>
    );
};

export default Navbar;