import React from 'react'
import '../assets/styles/Footer.css'
import * as RiIcon from 'react-icons/ri'
import * as FaIcon from 'react-icons/fa'
import { IconContext } from "react-icons/lib";
import deptLogo from '../assets/images/deptLogo.png'

export function Footer() {

    return (
        <div className='footer'>
            <div className='footerSection'>
                <div className='footerTop'>
                    <img src={deptLogo} alt="Dept logo" className='deptLogo'></img>
                    <div className='footerNav'>
                        <a href='#'>WORK</a>
                        <a href='#'>SERVICE</a>
                        <a href='#'>STORIES</a>
                        <a href='#'>ABOUT</a>
                        <a href='#'>CAREERS</a>
                        <a href='#'>CONTACT</a>
                    </div>

                    <div className='socialMedia'>
                        <IconContext.Provider value={{ color: "#FFF", size: "20px" }}>
                            <div className='icons'>
                                <a href='https://www.facebook.com/DeptAgency/' target="_blank">
                                    <RiIcon.RiFacebookFill />
                                </a>
                                <a href='https://twitter.com/deptagency' target="_blank">
                                    <RiIcon.RiTwitterFill />
                                </a>
                                <a href='https://www.instagram.com/deptagency/' target="_blank">
                                    <RiIcon.RiInstagramFill />
                                </a>

                            </div>
                        </IconContext.Provider>
                    </div>
                </div>

                <hr className='line'></hr>

                <div className='footerBottom'>
                    <div className='hiddenDiv'></div>
                    <div className='businessInfo'>
                        <a>Chamber of Commerce: 63464101 </a>
                        <a>VAT: NL 8552.47.502.B01 </a>
                        <a href='#'>Terms and conditions</a>
                    </div>
                    <div className='copyright'>
                        <IconContext.Provider value={{ color: "rgba(158, 158, 158, 0.685)", size: "20px" }}>
                            <RiIcon.RiCopyrightLine />
                        </IconContext.Provider>
                        <a>2018 Dept Agency</a>
                    </div>

                </div>
            </div>

            <div className='top'>
                <IconContext.Provider value={{ color: "#1A18F7", size: "30px" }}>
                    <div>
                        <FaIcon.FaLongArrowAltUp />
                    </div>
                </IconContext.Provider>
                <a href='#topOfPage' className='goToTop'>TOP</a>
            </div>
        </div>
    )
}
