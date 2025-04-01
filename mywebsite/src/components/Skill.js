import React, { useEffect, useState } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const data = [
    
    {
        name: "React",
        background: "orange",
        height: 95
    },
    {
        name: "Redux",
        background: "orange",
        height: 85
    },
    {
        name: "javascript",
        background: "orange",
        height: 90
    },
    {
        name: "Django",
        background: "orange",
        height: 85
    },
    {
        name: "nodeJS",
        background: "green",
        height: 85
    },
    {
        name: "DRF",
        background: "orangered",
        height: 80
    },
    {
        name: "expressJS",
        background: "white",
        height: 90
    },
    
    {
        name: "MongoDB",
        background: "yellow",
        height: 90
    },
    {
        name: "MySql",
        background: "green",
        height: 75
    },
    {
        name: "Tailwind",
        background: "purple",
        height: 85
    },
    {
        name: "Git/Github",
        background: "purple",
        height: 80
    },
    {
        name: "REST Api",
        background: "purple",
        height: 90
    }

]


export default function Skill() {

    useEffect(() => {
        gsap.fromTo('.skillpage',
            {
                y: 300,
                opacity: 0,
            },
            {
                scrollTrigger: {
                    trigger: ".skillpage",
                    toggleActions: "play none none none",
                    start: "top 120%",
                    // end: "bottom 60%",
                    // markers: true

                },
                y: "0",
                opacity: 1,
                duration: 1,
            })
    })
    return (
        <div className='skillpage   container-fluid py-4 mt-4 px-1'>
            <h1 className='text-white mb-4 px-md-5 px-0'>Skills</h1>
            <div className="row mx-0 mx-auto skillrow   px-0 flex-columns justify-content-md-start justify-content-between align-items-start px-md-0 px-sm-2 px-0" id='skills'>
                {
                    data.map((item) => {
                        return <div className="col-md-4 col-12 plots d-flex flex-column align-items-center px-0 " style={{ "height": "100%" }}>
                            <h6 className='text-white mb-1 text-start  d-block'>{item.name} </h6>
                            <div className="outer mb-md-4 mb-2   h-100  p-0  overflow-hidden  position-relative ">
                                {/* <img src={getimage(item.name)} className='w-75 mx-auto  mb-2' alt="" /> */}
                                <div className=' graph' style={{ "width": `${item.height}%` }}></div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div >
    )
}
//
//   <h1 className='text-white mb-4 text-center'>Skills</h1>
/* <Boxes imag="html" name="html" />
                <Boxes imag="css" name="css" />
                <Boxes imag="js" name="javascript" />
                <Boxes imag="mongodb" name="mongodb" />
                <Boxes imag="express-js" name="express-js" />
                <Boxes imag="nodejs" name="node-js" />
                <Boxes imag="python" name="python" />
                <Boxes imag="react-js" name="react-js" />
                <Boxes imag="bootstrap" name="bootstrap" /> */

/* <div className="col-1 plots px-4  d-flex align-items-end"><div className='mx-auto mt-auto'></div></div>
                <div className="col-1 plots px-4  d-flex align-items-end"><div className='mx-auto mt-auto'></div></div>
                <div className="col-1 plots px-4  d-flex align-items-end"><div className='mx-auto mt-auto'></div></div>
                <div className="col-1 plots px-4  d-flex align-items-end"><div className='mx-auto mt-auto'></div></div>
                <div className="col-1 plots px-4  d-flex align-items-end"><div className='mx-auto mt-auto'></div></div>
                <div className="col-1 plots px-4  d-flex align-items-end"><div className='mx-auto mt-auto'></div></div>
                <div className="col-1 plots px-4  d-flex align-items-end"><div className='mx-auto mt-auto'></div></div>
                <div className="col-1 plots px-4  d-flex align-items-end"><div className='mx-auto mt-auto'></div></div>
                <div className="col-1 plots px-4  d-flex align-items-end"><div className='mx-auto mt-auto'></div></div> */
