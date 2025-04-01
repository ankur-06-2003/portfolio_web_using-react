
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Myself from '../components/Myself'
import Skill from '../components/Skill'
import Contact from '../components/Contact'
import abs from '../photos/bg4.jpg'
import abs2 from '../photos/r7.jpeg'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function Home() {
    const [loading, setloading] = useState(true)
    const [style, setstyle] = useState({ height: "40px", width: "40px" })


    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 4000);
    }, []);

    // useEffect(() => {
    //     if (window.innerWidth === 768)
    //         console.log(window.innerWidth)
    // }, window.innerWidth)

    gsap.fromTo('.abs',
        {
            opacity: 0,
        },
        {
            scrollTrigger: {
                trigger: ".homepage",
                toggleActions: "play none none none",
                scroller: "body",
                start: "top 10%",
                // end: "bottom 60%",
                // markers: true

            },
            opacity: 1,
            duration: 8,
        }
    )


    return (
        <div className='position-relative'>
            <div className={loading ? "d-none" : 'position-relative w-100 p-0 homepage  '}>
                <Navbar />
                <Intro />
                <Myself />
                <Skill />
                <Contact />
                <img src={abs} className='abs position-absolute top-0 w-100 d-sm-inline d-none' alt="" />
                <img src={abs2} className='abs2 position-absolute top-0  d-sm-none d-inline' alt="" />
            </div>

            <div className={loading ? "loader position-absolute top-0 loader text-center" : "d-none"}>
                <svg id="mySVG" version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="235.000000pt" height="300.000000pt"
                    viewBox="0 0 235.000000 300.000000"  

                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                        fill="black" stroke="white" stroke-width="4">
                        <path d="M0 1500 l0 -1500 1175 0 1175 0 0 1500 0 1500 -1175 0 -1175 0 0 -1500z m1077 1123 c8 -21 39 -90 68 -153 73 -159 267 -584 322 -705 98 -216 152 -325 162 -325 5 0 22 25 36 55 21 42 26 63 21 90 -9 45 -48 91 -91 106 -18 7 -36 21 -38 31 -5 17 8 18 264 18 221 0 269 -2 269 -14 0 -8 -21 -18 -57 -25 -134 -26 -258 -115 -365 -260 l-27 -38 27 -26 c37 -35 92 -57 147 -57 33 0 45 -4 45 -15 0 -23 -625 -23 -634 0 -3 9 0 15 10 15 30 0 83 32 90 53 4 12 7 35 5 51 -2 29 -74 207 -112 276 -11 19 -80 168 -153 330 -74 162 -137 295 -142 297 -5 1 -20 -23 -33 -55 -101 -237 -173 -387 -186 -390 -8 -2 -15 -1 -15 2 0 6 328 754 336 768 12 19 36 5 51 -29z m73 -898 c0 -12 -14 -15 -70 -15 -86 0 -136 -19 -150 -56 -17 -45 -5 -67 150 -282 82 -113 178 -249 213 -299 12 -18 27 -33 32 -33 6 0 26 23 45 50 19 27 41 50 48 50 19 0 15 -7 -31 -68 l-44 -57 -6 -192 c-5 -153 -4 -200 8 -232 8 -23 10 -41 5 -41 -6 0 -10 5 -10 10 0 6 -5 10 -11 10 -6 0 -9 -7 -5 -15 4 -13 2 -14 -14 -5 -15 8 -20 8 -20 -2 0 -9 -3 -9 -10 2 -8 13 -10 12 -10 -2 0 -10 -7 -18 -15 -18 -9 0 -12 6 -9 15 7 17 -11 21 -21 5 -5 -8 -11 -7 -21 1 -8 6 -14 8 -14 4 0 -4 -7 -2 -16 6 -13 10 -17 10 -25 -2 -5 -8 -9 -21 -9 -31 0 -9 -4 -18 -9 -20 -4 -1 -12 -13 -15 -25 -7 -23 0 -27 42 -26 6 1 12 -3 12 -8 0 -5 10 -5 23 -1 20 7 55 8 75 2 4 -1 12 -3 17 -4 11 -1 15 -9 15 -27 0 -17 -178 -9 -193 10 -10 12 -8 14 13 8 24 -6 24 -5 6 8 -11 8 -24 15 -28 15 -16 0 -21 -32 -7 -41 9 -6 -44 -8 -140 -4 -85 3 -156 7 -158 9 -2 2 40 5 94 8 54 3 107 10 119 16 12 6 26 7 34 2 16 -10 53 6 45 20 -3 5 0 12 6 15 5 4 8 14 5 22 -3 8 2 26 12 41 14 22 17 56 20 224 l3 198 -58 79 c-32 43 -129 175 -215 292 -86 118 -177 234 -201 257 l-45 44 -17 -46 c-26 -67 -17 -153 19 -201 30 -38 94 -74 134 -75 13 0 22 -6 22 -15 0 -13 -37 -15 -270 -15 -224 0 -270 2 -270 14 0 8 15 17 37 21 110 20 214 120 297 282 l26 52 -27 15 c-35 17 -122 36 -168 36 -24 0 -35 5 -35 15 0 13 51 15 395 15 344 0 395 -2 395 -15z m36 -1193 c-10 -2 -22 0 -28 6 -6 6 0 7 19 4 21 -5 23 -7 9 -10z m214 -43 c11 -19 10 -20 -10 -9 -13 7 -20 8 -16 2 3 -6 2 -13 -2 -16 -7 -4 -10 29 -3 42 4 9 22 -1 31 -19z m-313 4 c-4 -3 -10 -3 -14 0 -3 4 0 7 7 7 7 0 10 -3 7 -7z m199 -9 c-9 -8 -13 -21 -10 -27 5 -8 2 -8 -7 1 -7 6 -21 12 -32 12 -10 0 -16 4 -13 8 3 5 -1 9 -9 9 -8 0 -12 -4 -9 -9 3 -4 -4 -8 -15 -8 -12 0 -21 7 -21 15 0 12 14 15 66 15 60 0 64 -1 50 -16z m-221 -14 c3 -5 4 -10 1 -10 -3 0 -8 5 -11 10 -3 6 -4 10 -1 10 3 0 8 -4 11 -10z m280 -11 c16 -16 -19 -9 -40 7 -19 16 -19 16 5 9 14 -4 29 -11 35 -16z m95 -4 c0 -9 -44 -45 -54 -45 -6 0 -3 5 7 11 9 5 17 17 17 24 0 8 7 15 15 15 8 0 15 -2 15 -5z m24 -17 c-5 -8 -2 -9 9 -5 9 3 19 2 22 -2 4 -8 -46 -23 -53 -17 -6 6 11 36 20 36 5 0 6 -5 2 -12z m206 -16 c0 -5 -28 -7 -62 -4 -90 5 -95 10 -10 11 39 1 72 -3 72 -7z">
                            <animate attributeName="stroke-dasharray" from="0,2000" to="2000,0" dur="3s" fill="freeze" />
                        </path>
                        <path d="M1310 590 c-9 -16 -8 -18 5 -14  8 4 15 12 15 20 0 20 -7 17 -20 -6z">
                            <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="2s" fill="yellow" />
                        </path>
                        <path d="M963 423 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z">
                            <animate attributeName="stroke-dasharray" from="0,50" to="50,0" dur="2s" fill="freeze" />
                        </path>
                    </g>
                </svg>

                <h5 className='text-center text-white opacity-50 position-relative hr-lines'>great to see you </h5>

            </div >

            {/* <div className={!loading ? "sidebar position-absolute d-md-inline d-none top-0 px-1 pt-3    start-0" : "d-none"}>
                <ul className='p-0 text-start text-white'>
                    <li className='list-style-none w-auto mb-3 ms-0 '><Link to={"https://www.linkedin.com/in/dinesh-yadav-264113265/"} className='text-decoration-none text-white '><LinkedInIcon sx={{ fontSize: "35" }} /></Link></li>
                    <li className='list-style-none  mb-3 ms-0 '><Link to={"https://www.instagram.com/mr.oggiii?igsh=MXNieXpmMDBrZXJzcQ=="} className='text-decoration-none text-white '><InstagramIcon sx={{ fontSize: 35 }} /></Link></li>
                    <li className='list-style-none  mb-3 ms-0 ' ><Link to={"https://x.com/dineshnirban04?t=hZTTivl1xtnSlB8dvyHlPw&s=09"} className='text-decoration-none text-white '><XIcon sx={{ fontSize: 35 }} /></Link></li>
                    <li className='list-style-none  mb-3 ms-0 '><Link to={"https://www.reddit.com/u/uvyadav_04/s/O3mcaRamyH"} className='text-decoration-none text-white '><RedditIcon sx={{ fontSize: 35 }} /></Link></li>
                    <li className='list-style-none  ms-0 '><Link to={"https://github.com/UvYadav04"} className='text-decoration-none text-white '><GitHubIcon sx={{ fontSize: 35 }} /></Link></li>
                </ul>
            </div> */}
        </div>
    )
}
// 