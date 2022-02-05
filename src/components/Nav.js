import React from 'react'
import '../assets/styles/Nav.css';
import { NavLink } from 'react-router-dom';

export function Nav() {

    return (
        <div className='nav'>
            <nav>
                <ul className='navLinks'>
                    <NavLink className='link' exact to="/" activeClassName='activeLink'>
                        <li className='current'>HOME</li>
                    </NavLink>
                    <NavLink className='link' to="#" activeClassName='activeLink'>
                        <li className='current'>WERK</li>
                    </NavLink>
                    <NavLink className='link' to="#" activeClassName='activeLink'>
                        <li className='current'>OVER</li>
                    </NavLink>
                    <NavLink className='link' to="#" activeClassName='activeLink'>
                        <li className='current'>DIENSTEN</li>
                    </NavLink>
                    <NavLink className='link' to="#" activeClassName='activeLink'>
                        <li className='current'>PARTNERS</li>
                    </NavLink>
                    <NavLink className='link' to="#" activeClassName='activeLink'>
                        <li className='current'>STORIES</li>
                    </NavLink>
                    <NavLink className='link' to="#" activeClassName='activeLink'>
                        <li className='current'>VACATURES</li>
                    </NavLink>
                    <NavLink className='link' to="#" activeClassName='activeLink'>
                        <li className='current'>EVENTS</li>
                    </NavLink>
                    <NavLink className='link' to="#" activeClassName='activeLink'>
                        <li className='current'>CONTACT</li>
                    </NavLink>
                </ul>
            </nav>
        </div>

    )
}
