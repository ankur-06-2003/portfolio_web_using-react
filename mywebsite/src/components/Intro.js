import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useRef } from 'react';
import abs from '../photos/bg4.jpg'
import photo2 from '../photos/myfoto6.jpeg'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import RedditIcon from '@mui/icons-material/Reddit';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { Link, useHref } from 'react-router-dom';
import bg from '../photos/r9.jpeg'


import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function Intro() {



    useEffect(() => {
        gsap.fromTo('.slide1',
            {
                x: "-50%",
                opacity: 0,
            },
            {
                scrollTrigger: {
                    trigger: ".intro",
                    toggleActions: "play none none none",
                    scroller: "body",
                    start: "top 20%",
                    // end: "bottom 60%",
                    // markers: true

                },
                x: "0",
                opacity: 1,
                duration: 2,
            }
        )

        // gsap.fromTo('.sidebar',
        //     {
        //         opacity: 0,
        //     },
        //     {
        //         scrollTrigger: {
        //             trigger: ".intro",
        //             toggleActions: "play none none none",
        //             scroller: "body",
        //             start: "top 20%",
        //             // end: "bottom 60%",
        //             // markers: true

        //         },

        //         opacity: 1,
        //         duration: 3,
        //     }
        // )
        gsap.fromTo('.imgu',
            {
                x: "50%"
            },
            {
                scrollTrigger: {
                    trigger: ".intro",
                    toggleActions: "play none none none",
                    scroller: "body",
                    start: "top 20%",
                    // end: "bottom 60%",
                    // markers: true

                },
                x: 0,
                duration: 1,
            }
        )
    })



    return (
        <>
            <div className="intro  container-fluid py-lg-5 py-sm-3 py-0 px-sm-3 px-0 position-relative mx-auto mt-xl-3 mt-lg-4 mt-sm-5 mt-0 mb-sm-5 mb-0">
                <div className="row p-0 m-0 w-100  align-items-sm-center align-items-end  flex-sm-row flex-row-reverse justify-content-sm-between justify-content-around ">
                    <div className="about col-lg-6 col-sm-6 col-8 m-0 ">
                        <h3 className='slide1 my-0 fs-lg-3 fs-4 d-lg-block d-none'>Hello , I'm</h3>
                        <h1 className='slide1 m-0 p-0 mb-sm-0 mb-0 ms-sm-0 ms-1 mt-sm-0 mt-4' > Ankur</h1>
                        <h3 className='slide1 fs-lg-3 fs-sm-5 fs-6 d-sm-block d-none'>JavaScript developer</h3>
            

                        <ul className='p-0 text-start text-white m-0 conlist'>
                            <li className='list-style-none  m-0 ms-0 p-0'><Link to={"https://www.linkedin.com/in/ankur-08635a284"} className='text-decoration-none text-white '><LinkedInIcon className='p-1' sx={{ fontSize: 32, }} /></Link></li>
                            <li className='list-style-none  m-0 ms-0 '><Link to={"https://www.instagram.com/itz_ankur_2003"} className='text-decoration-none text-white '><InstagramIcon className='p-1' sx={{ fontSize: 32 }} /></Link></li>
                            <li className='list-style-none  m-0 ms-0 '><Link to={"https://github.com/ankur-06-2003"} className='text-decoration-none text-white '><GitHubIcon className='p-1' sx={{ fontSize: 32 }} /></Link></li>
                        </ul>
                        <p className="d-md-none d-sm-block d-none aboutsm mt-md-3 mt-1  " >JavaScript developer , creating efficient web solutions.</p>

                        <p className='mt-lg-4 mt-md-1 mt-0 p-0 d-md-block d-none slide1'>"Specializing in MongoDB, Express.js, React, and Node.js, proficient in crafting scalable data solutions, efficient backends, and dynamic interfaces. <span className="d-xl-inline d-none"> Leveraging Node.js for optimized performance, Bootstrap for responsive design, and animations for enhanced user engagement.</span>
                        </p>

                        {/* <a href='#projects' style={{ textDecoration: "none" }} className='px-sm-3 px-2 fs-lg-5 fs-6 me-2 rounded-1 py-sm-1 py-0 d-md-inline d-none bg-white text-black '>Projects</a> */}
                        <a href='#contact' style={{ textDecoration: "none" }} className='px-sm-3 px-2 fs-lg-5 fs-6 me-2 rounded-1 py-sm-1 py-0 d-md-inline d-none bg-white text-black '>Hire me</a>



                    </div>

                    <div className="image col-lg-5  col-md-6 col-sm-6 col-3 p-xl-0 p-md-4 p-sm-4 p-0   text-center">
                        <img src={photo2} className='w-100 imgu bg bg-white m-0 p-0' alt="" />
                    </div>
                </div>

              


            </div >
        </>
    )
}
