import React from 'react';
import backgroundIMG from '../assets/images/florensis.png';
import '../assets/styles/Homepage.css';
import { WorkData } from '../data/WorkData';
import * as IoIcon from 'react-icons/io'
import { IconContext } from "react-icons/lib";

function Homepage() {

    return (
        <div className='homepage'>
            <header className='header'>
                <img src={backgroundIMG} alt="background image" className='bgImage' />
            </header>

            <div className='filterSection'>
                <p className='txtFilter'>filter part</p>
            </div>

            <div className='workSection'>
                <div className='workContainer'>
                    {
                        WorkData.map((data, idx) => {
                            return (
                                <div className='card'>
                                    <img src={data.image} alt="image" className='workImg'></img>
                                    <p className='nameTxt'>{data.name}</p>
                                    <p className='titleTxt'>{data.title}</p>
                                    <div className='link'>
                                        <IconContext.Provider value={{ color: "#1A18F7", size: "30px" }}>
                                            <div>
                                                <IoIcon.IoMdArrowDropright />
                                            </div>
                                        </IconContext.Provider>
                                        <p className='linkTxt'>VIEW CASE </p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Homepage;