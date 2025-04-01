import React from 'react'
import book from '../photos/book.png'
import resume from '../data/Ankur_Resume-2.pdf'

export default function Myself() {

    return (
        <div className='mypage container-fluid p-0 py-2 position-relative w-100 '>
            <div className="myrow row w-100 mx-auto justify-content-around align-items-center px-4" id='about'>

                <div className="col-3 p-0 d-lg-inline d-none">
                    <img src={book} className='w-100 ' alt="" />
                </div>

                <div className="col-lg-6 col-12  left text-white opacity-75 px-md-4 px-sm-2 px-0 ">
                    <h2 className='m-0 fs-sm-2 fs-3'>About me</h2>
                    <p className=''>Hey there! I'm a MERN stack developer, proficient in MongoDB, Express.js, React, and Node.js. Specializing in end-to-end web development,<span className="d-xl-inline d-lg-none d-sm-inline d-none"> I excel in building robust and scalable applications that leverage the power of JavaScript across the stack.</span> <span className="d-xl-inline d-none">From crafting interactive user interfaces with React to designing efficient server-side architectures with Node.js.</span ><span className="vusu">Adept at integrating APIs and optimizing performance for seamless user experiences in full-stack development.</span> </p>

                    <hr />


                    <a href='/' onClick={() => window.open(resume)} className=' px-sm-3 px-2 py-sm-1 py-1 fs-sm-4 fs-6 me-2 rounded-2 text-decoration-none buttons text-white'>Resume</a>
                    <a href='#projects' className='px-sm-3 px-2 py-sm-1 py-1 fs-sm-4 fs-6 rounded-2 text-decoration-none buttons text-white'>Projects</a>
                </div>


                <div className="svgs position-absolute top-0">
                    <svg height="700" className=' w-100' viewBox="0 0">
                        {/* <path className='d-md-inline d-none' stroke='orange' fill='orange' d="M0,0 C150,500 400,200 600,735 H0 V0"></path> */}

                        <path className='d-lg-block d-none' opacity={0.5} d="M1300,0 L1300,120" stroke='white' />
                        <path className='d-lg-block d-none' opacity={0.5} d="M1200,0 L1200,220" stroke='white' />
                        <path className='d-lg-block d-none' opacity={0.5} d="M1100,0 L1100,100" stroke='white' />
                        <path className='d-lg-block d-none' opacity={0.5} d="M1000,0 L1000,180" stroke='white' />
                        <path className='d-lg-block d-none' opacity={0.5} d="M900,0 L900,240" stroke='white' />
                        <path className='d-lg-block d-none' opacity={0.5} d="M800,0 L800,100" stroke='white' />

                        <circle className='circles d-lg-block d-none ' cx={1300} cy={150} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-block d-none ' cx={1200} cy={250} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-block d-none ' cx={1100} cy={130} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-block d-none ' cx={1000} cy={210} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-block d-none ' cx={900} cy={270} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-block d-none ' cx={800} cy={130} r={30} fill='black' stroke='00ffee'></circle>

                        <circle className='circles d-lg-block d-none ' cx={1300} cy={150} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-block d-none ' cx={1100} cy={130} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-block d-none ' cx={800} cy={130} r={30} fill='black' stroke='00ffee'></circle>

                        <path opacity={0.5} d="M410,0 L410,100" stroke='white' className='d-lg-none d-sm-block d-none' />
                        <path opacity={0.5} d="M500,0 L500,210" stroke='white' className='d-lg-none d-sm-block d-none' />
                        <path opacity={0.5} d="M590,0 L590,120" stroke='white' className='d-lg-none d-sm-block d-none' />
                        <path opacity={0.5} d="M680,0 L680,220" stroke='white' className='d-lg-none d-sm-block d-none' />
                        <path opacity={0.5} d="M770,0 L770,140" stroke='white' className='d-lg-none d-sm-block d-none' />
                        <path opacity={0.5} d="M850,0 L850,245" stroke='white' className='d-lg-none d-sm-block d-none' />
                        <circle className='circles d-lg-none d-sm-block d-none' cx={410} cy={130} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-none d-sm-block d-none' cx={500} cy={240} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-none d-sm-block d-none' cx={590} cy={150} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-none d-sm-block d-none' cx={680} cy={250} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-none d-sm-block d-none' cx={770} cy={170} r={30} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-lg-none d-sm-block d-none' cx={850} cy={275} r={30} fill='black' stroke='00ffee'></circle>

                        <path opacity={0.5} d="M540,0 L540,185" stroke='white' className='d-sm-none' />
                        <path opacity={0.5} d="M470,0 L470,105" stroke='white' className='d-sm-none' />
                        <path opacity={0.5} d="M400,0 L400,215" stroke='white' className='d-sm-none' />
                        <path opacity={0.5} d="M320,0 L320,125" stroke='white' className='d-sm-none' />
                        <circle className='circles d-sm-none' cx={540} cy={210} r={25} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-sm-none' cx={470} cy={130} r={25} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-sm-none' cx={400} cy={240} r={25} fill='black' stroke='00ffee'></circle>
                        <circle className='circles d-sm-none' cx={320} cy={150} r={25} fill='black' stroke='00ffee'></circle>

                    </svg>
                </div>
            </div>
        </div>
    )
}
