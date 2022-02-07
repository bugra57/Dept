import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons/lib";
import '../assets/styles/ConstructionPage.css'

import deptImage from '../assets/images/deptOffice.jpeg'


export function UnderConstructionPage() {
    return (
        <div className='underContructionPage'>
            <div className='text'>
                <p>Coming Soon</p>
                <a href='/'>Go back to Home</a>
            </div>
            <div className='bgImageCon'>
                <img src={deptImage} className="deptImg"></img>
            </div>
        </div>
    )
}

