import React, { useEffect, useState } from 'react'
import logo from '../photos/logo.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function Navbar() {
    useEffect(() => {
        gsap.fromTo('.slide',
            {
                x: 50,
                opacity: 0,
            },
            {
                scrollTrigger: {
                    trigger: ".slide",
                    toggleActions: "play none none none",
                    scroller: "body",
                    start: "top 120%",
                    // end: "bottom 60%",
                    // markers: true
                },
                x: 0,
                opacity: 1,
                duration: 1,
            })
    })
    const [ON, setON] = useState(false)
    return (
        <div className='container-fluid p-0 py-3 navcn'>
            <div className="row navrow text-white m-0 align-items-center justify-content-md-around justify-content-between ">
                <div className="col-auto p-0 m-0 mx-md-0 ms-5">
                    {/* <img src={logo} className="p-0 m-0" alt="" /> */}
                    <h1 className='my-auto logo'>Ankur</h1>
                </div>
                <div className="col-lg-7 col-sm-9 bg m-0 d-sm-inline d-none ">
                    <ul className='d-flex  flex-row    justify-content-between align-items-center p-0 m-0 '>
                        <li className='d-inline pb-2 list-style-none p-0 home mt-2 slide'>
                            <a href='/' className='fs-6 text-decoration-none m-0' style={{ color: '#4E9CD5' }}>HOME</a>
                        </li>
                        <li className='d-inline mt-2 pb-2 list-style-none p-0 slide'>
                            <a href='#about' className='fs-6 text-decoration-none text-white  m-0' >ABOUT ME</a>
                        </li>

                        <li className='d-inline  mt-2 pb-2 list-style-none p-0 slide'>
                            <a href='#skills' className='fs-6 text-decoration-none text-white  m-0' >SKILLS</a>
                        </li>
                        <li className='d-inline experience mt-2 pb-2 list-style-none p-0 d-md-inline d-none slide' style={{ cursor: "not-allowed" }}>
                            <a href='/' className='fs-6 text-decoration-none text-white  m-0' style={{ cursor: "not-allowed" }}   >EXPERIENCE</a>
                        </li>
                        <li className='d-inline  list-style-none p-0 slide'>
                            <a href='#contact' className='py-md-2 py-1 px-md-4 px-2 fs-6 rounded-1 text-decoration-none contact text-white'>CONTACT</a>
                        </li>
                    </ul>
                </div>

                <div className="col-sm-2 col-3 text-end pe-3  d-sm-none d-inline p-0 fs-3 menubar position-relative mx-md-0 mx-sm-3 mx-4 ">
                    <button className='m-0 p-0 w-auto  text-white bg bg-transparent' onClick={() => setON(!ON)}>|||</button>
                    <div className={ON ? "bar position-absolute text-start opacity-100 show " : "bar position-absolute   text-start hidden "}>
                        <ul className='px-3'>
                            <li className=' list-style-none p-0 home '>
                                <a href='/' className='fs-6 text-decoration-none  m-0' style={{ color: '#4E9CD5' }}>HOME</a>
                            </li>
                            <li className=' list-style-none p-0'>
                                <a href='#about' className='fs-6 text-decoration-none text-white  m-0' >ABOUT ME</a>
                            </li>

                            <li className=' list-style-none p-0'>
                                <a href='#skills' className='fs-6 text-decoration-none text-white  m-0' >SKILLS</a>
                            </li>
                            <li className=' list-style-none p-0'>
                                <a href='/' className='fs-6 text-decoration-none text-white  m-0' >EXPERIENCE</a>
                            </li>
                            <li className=' list-style-none p-0'>
                                <a href='#contact' className='fs-6 rounded-1 text-decoration-none text-white'>CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >

    )
}
