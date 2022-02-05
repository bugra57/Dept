import React from 'react'
import { NavLink } from 'react-router-dom';

export function Nav() {

    return (
        <div className='nav'>
            <nav>
                <ul className='navLinks'>
                    <NavLink className='link' to="/" >
                        <li className='current'>HOME</li>
                    </NavLink>
                    <NavLink className='link' to="/test" >
                        <li className='current'>test</li>
                    </NavLink>
                    <NavLink className='link' to="#">
                        <li className='current'>OVER</li>
                    </NavLink>
                    <NavLink className='link' to="#" >
                        <li className='current'>DIENSTEN</li>
                    </NavLink>
                    <NavLink className='link' to="#" >
                        <li className='current'>PARTNERS</li>
                    </NavLink>
                    <NavLink className='link' to="#" >
                        <li className='current'>STORIES</li>
                    </NavLink>
                    <NavLink className='link' to="#" >
                        <li className='current'>VACATURES</li>
                    </NavLink>
                    <NavLink className='link' to="#" >
                        <li className='current'>EVENTS</li>
                    </NavLink>
                    <NavLink className='link' to="#">
                        <li className='current'>CONTACT</li>
                    </NavLink>
                </ul>
            </nav>
        </div>

    )
}

