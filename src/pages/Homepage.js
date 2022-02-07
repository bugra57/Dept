import React, { useEffect, useState } from 'react';
import backgroundIMG from '../assets/images/florensis.png';
import '../assets/styles/Homepage.css';
import * as IoIcon from 'react-icons/io'
import { IconContext } from "react-icons/lib";

// Data import 
import { WorkData } from '../data/WorkData';
import { ClientsData } from '../data/ClientsData';


function Homepage() {

    const [companies, setCompanies] = useState([]);
    const [company, setCompany] = useState("")

    const tags = useState([
        {nameTag: "All-work"}, 
        {nameTag: "Government"},
        {nameTag: "Webshop"},
        {nameTag: "Business"},
      ])

    const handleChangeCourse = event => {
        setCompany(event.target.value);
    };

    const getUnique = (arr, comp) => {
        const unique = arr
            //store the comparison values in array
            .map(e => e[comp])

            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the dead keys & store unique objects
            .filter(e => arr[e])

            .map(e => arr[e]);

        return unique;
    };

    useEffect(() => {
        let companies = WorkData
        setCompanies(companies)
    })

    const uniqueCompany = getUnique(companies, "tag",)

    const filterDropdown = companies.filter(function (result) {
        return result.tag === company;
    });

    return (
        <div className='homepage'>
            <a id='topOfPage'></a>
            <header className='header'>
                <img src={backgroundIMG} alt="background image" className='bgImage' />
            </header>

            <div className='filterSection'>
                <p className='txtFilter'>Show me:</p>

                {/* dropdown */}
                <div className='filter'>
                    <select onChange={handleChangeCourse}>
                        {
                            uniqueCompany.map(company => {
                                return (
                                    <option key={company.id}>
                                        {company.tag}
                                    </option>
                                )
                            })
                        }

                    </select>
                </div>
            </div>

            <div className='workSection'>
                <div className='workContainer'>
                    {
                        filterDropdown.map((data) => {
                            return (
                                <div className='card' key={data.id}>
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

            <div className='clientSection'>
                <p className='clientTitle'>CLIENTS</p>
                <p className='clientTxt'>
                    We value a great working relationship with our clients above all else. It's why then often come to our parties. It's also why we're able to challengen and inspire them to reach for the stars.
                </p>
                <div className='clientContainer'>
                    {
                        ClientsData.map((data) => {
                            return (
                                <img src={data.image} alt="clientImage" key={data.id} className="clientImage"></img>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Homepage;