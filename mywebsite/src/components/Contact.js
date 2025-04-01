import React, { useEffect, useState } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';


export default function Contact() {
    const [data, setdata] = useState({ name: "", email: "", mobile: "", message: "" })
    const [loading, setloading] = useState(false)
    const [left, setleft] = useState(true)
    const handlemessage = async () => {
        if (data.message === "" || data.name === "" || data.email === "" || data.mobile === "") {
            alert("Fill the information properly")
            return
        }
        setloading(true)
        const response = await fetch("http://localhost:8000", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        setloading(false)
        const json = await response.json();
        if (json.success) {
            alert("Message sent successfully")
            setdata((pdata) => {
                return { name: "", email: "", mobile: "", message: "" }
            })
        } else {
            alert("something went wrong try again")
        }
    }

    const handlechange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setdata((pdata) => {
            return { ...pdata, [name]: value }
        })
    }
    // useEffect(() => {
    //     gsap.fromTo('.concol',
    //         {
    //             x: -500,
    //             opacity: 0,
    //         },
    //         {
    //             scrollTrigger: {
    //                 trigger: ".concol",
    //                 toggleActions: "play none none none",
    //                 start: "top 80%",
    //                 // end: "bottom 60%",
    //                 // markers: true

    //             },
    //             x: 0,
    //             opacity: 1,
    //             duration: 1,
    //         }
    //     )

    // }, [])
    return (
        <>
            <div className='conpage container-fluid p-0'>
                <div className="row conrow mb-3 justify-content-around position-relative px-md-4 px-1 pt-md-4 pt-0 pb-2 mx-md-5 mx-sm-3 mx-2 " id='contact'>
                    <div className="col-md-5 col-sm-10 col-11 p-0 concol d-md-inline d-none">
                        <h1 className='text-black text-md-start text-center mt-md-4 mt-sm-1 mt-0 fs-sm-1 fs-2 d-sm-block d-none'>Have a project? Let's talk</h1>
                        <h6 className='d-lg-inline d-none'>For inquiries about new or ongoing projects, please feel free to reach out. I'm available to discuss your ideas and assist with your development needs.</h6>
                        <div className="conifo d-md-inline d-none ">
                            <h6 className='text-start m-0'>Mob : +91 8950605155</h6>
                            <h6 className='text-start m-0'>Email : ankuryadav8802@gmail.com</h6>

                            <ul className='p-0 text-start'>
                                <li className='list-style-none d-inline me-3 ms-0'><Link to={"https://www.linkedin.com/in/ankur-08635a284"} className='text-decoration-none text-black opacity-50'><LinkedInIcon /></Link></li>
                                <li className='list-style-none d-inline me-3 ms-0'><Link to={"https://www.instagram.com/itz_ankur_2003"} className='text-decoration-none text-black opacity-50'><InstagramIcon /></Link></li>
                                <li className='list-style-none d-inline me-3 ms-0'><Link to={"https://github.com/ankur-06-2003"} className='text-decoration-none text-black opacity-50'><GitHubIcon /></Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="contact col-lg-5 col-md-6 col-sm-10 col-11  p-0 d-md-flex d-none justify-content-between flex-column">
                        <input type="text" name='name' placeholder='name' className=' mb-lg-3 mb-2 px-1 border-none' value={data.name} onChange={(e) => handlechange(e)} />
                        <input type="number" name='mobile' placeholder='mobile' className=' mb-lg-3 mb-2 px-1 border-none w-100' value={data.mobile} onChange={(e) => handlechange(e)} />
                        <input type="email" name='email' placeholder='email' className=' mb-lg-3 mb-2 px-1 border-none' value={data.email} onChange={(e) => handlechange(e)} />
                        <textarea name="message" id="message" placeholder='message' cols={20} rows={5} className='px-1 w-100' value={data.message} onChange={(e) => handlechange(e)} ></textarea>
                        <button className='text-white bg bg-black ms-auto px-2 rounded-1 mt-sm-3 mt-2' onClick={() => handlemessage()} >Send Message</button>
                    </div>
                    <div className={!left ? "contact2 col-11 pt-3 p-0 d-md-none d-flex justify-content-between flex-column slideshow" : "contact2 col-11 pt-3 p-0 d-md-none d-flex justify-content-between flex-column slidehide"}>
                        <input type="text" name='name' placeholder='name' className=' mb-lg-3 mb-2 px-1 border-none' value={data.name} onChange={(e) => handlechange(e)} />
                        <input type="number" name='mobile' placeholder='mobile' className=' mb-lg-3 mb-2 px-1 border-none w-100' value={data.mobile} onChange={(e) => handlechange(e)} />
                        <input type="email" name='email' placeholder='email' className=' mb-lg-3 mb-2 px-1 border-none' value={data.email} onChange={(e) => handlechange(e)} />
                        <textarea name="message" id="message" placeholder='message' cols={20} rows={5} className='px-1 w-100' value={data.message} onChange={(e) => handlechange(e)} ></textarea>

                        <div className="d-flex justify-content-between ">
                            <button className='text-white bg bg-black px-2 rounded-1 mt-sm-3 mt-2' onClick={() => setleft(true)} >back</button>
                            <button className='text-white bg bg-black ms-auto px-2 rounded-1 mt-sm-3 mt-2' onClick={() => handlemessage()} >Send Message</button>
                        </div>
                    </div>

                    <div className={left ? "d-md-none showbuttons sliders px-2 pt-0 pb-0 bg bg-black" : "p-2 pt-4 pb-0 d-md-none hidebuttons sliders bg bg-black"} >
                        <h1 className='py-1 m-0 mt-1 mb-sm-2  w-100 text-center px-4 '>Contact Me</h1>
                        <p className='mb-2 mt-2 px-1 d-sm-block d-none text-center'>For inquiries about new or ongoing projects, please feel free to reach out. I'm available to discuss your ideas and assist with your development needs </p>
                        <p className='mb-2 mt-2 px-1 d-sm-none text-center'>Any exciting project? react me out. </p>
                        <ul className='p-0 my-1 mt-sm-3 text-start text-white m-0 conlist d-flex justify-content-center gap-4 w-75   '>
                            <li className='list-style-none  m-0 ms-0 p-0'><Link to={"https://www.linkedin.com/in/ankur-08635a284"} className='text-decoration-none text-white '><LinkedInIcon className='p-1' sx={{ color: "white", backgroundColor: "#0ef", fontSize: 25, borderRadius: "100%" }} /></Link></li>
                            <li className='list-style-none  m-0 ms-0 '><Link to={"https://www.instagram.com/itz_ankur_2003"} className='text-decoration-none text-white '><InstagramIcon className='p-1' sx={{ color: "white", backgroundColor: "#0ef", fontSize: 25, borderRadius: "100%" }} /></Link></li>
                            <li className='list-style-none  m-0 ms-0 '>
                                <Link to={"https://github.com/ankur-06-2003"} className='text-decoration-none text-white '><GitHubIcon className='p-1' sx={{ color: "white", backgroundColor: "#0ef", fontSize: 25, borderRadius: "100%" }} /></Link></li>
                        </ul>

                        <ul className='mt-sm-3 mt-1 p-0 mb-1 d-flex flex-wrap justify-content-center'>
                            <li className='me-2'><MailIcon className='mb-1' sx={{ fontSize: 20 }} />ankuryadav8802@gmail.com</li>
                            <li className='me-2'><CallIcon className='mb-1' sx={{ fontSize: 20 }} />+91 8950605155</li>
                        </ul>
                        {/* <button className='ms-auto me-0 mt-sm-4 mt-2 mb-0' onClick={() => setleft(false)} >send message</button> */}
                    </div>

                    <div className={loading ? "col-12 d-flex justify-content-center align-items-center loader position-absolute top-0 h-100 opac clasity-50 w-100" : "d-none"} style={{ backgroundColor: "black " }} >
                        <h3 className="text-center text-white w-100 fs-md-3 fs-5">
                            please wait...
                        </h3>
                    </div>
                </div>
            </div>

        </>
    )
}
