import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as FaIcon from 'react-icons/fa';
import * as GrIcon from 'react-icons/gr';
import * as MdIcon from 'react-icons/md';
import { IconContext } from "react-icons/lib";
import { SidebarData } from '../data/SidebarData'
import '../assets/styles/Navbar.css'


export function Nav() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            {/* this is the menu button */}
            <div className='nav'>
                <Link className='link' to="#" className="menu-bar">
                    <IconContext.Provider value={{ color: "black" }}>
                        <div>
                            <FaIcon.FaBars onClick={showSidebar} />
                        </div>
                    </IconContext.Provider>
                </Link>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <IconContext.Provider value={{ color: "white" }}>
                                <div>
                                    <MdIcon.MdClose />
                                </div>
                            </IconContext.Provider>
                        </Link>
                    </li>
                    {
                        SidebarData.map((mItem, idx) => {
                            return (
                                <li key={idx} className={mItem.className}>
                                    <Link to={mItem.path}>
                                        <h4>{mItem.title}</h4>

                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}

