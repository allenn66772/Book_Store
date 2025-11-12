import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";


function Header() {

    const [listStatus, setListStatus] = useState(false)
    return (
        <>

            <div className='grid grid-cols-3 p-3 '>

                {/* logo */}

                <div className='flex items-center'>
                    <img width={"50px"} height={"80px"} src="https://pngfre.com/wp-content/uploads/book-png-image-pngfre-26-300x264.png" alt="" />
                    <h1 className='font-bold text-2xl ms-2 md:hidden'>BOOKSTORE</h1>
                </div>

                {/* title */}
                <div className='md:flex justify-center items-center hidden'>
                    <h1 className='text-3xl font-bold'>BOOKSTORE</h1>
                </div>

                {/* login */}

                <div className='md:flex justify-end items-center hidden'>
                    <FaInstagramSquare className='me-3 text-2xl' />
                    <FaFacebookSquare className='me-3 text-2xl' />
                    <FaLinkedin className='me-3 text-2xl' />

                    <Link to={"/login"}><button className='flex justify-between items-center border border-black rounded px-3 py-2 ms-3 
                            hover:bg-black hover:text-white'><FaRegUser />Login</button></Link>

                </div>
            </div>

            <nav className=' w-full  bg-gray-900 text-white p-3 md:flex justify-center items-center'>

                <div className='flex justify-between  items-center md:hidden '>
                    <button onClick={() => setListStatus(!listStatus)}> <TiThMenu className='text-2xl' /></button>

                    <Link to={"/login"}><button className='flex justify-between items-center border border-black rounded px-3 py-2 ms-3 
                            hover:bg-black hover:text-white'><FaRegUser />Login</button></Link>


                </div>
                <ul className={listStatus ? "flex flex-col" : 'md:flex justify-center items-center hidden'}>
                    <li className='md:mx-4 mt-3 md:mt-0'> <Link to={"/"}>Home</Link></li>
                    <li className='md:mx-4 mt-3 md:mt-0'> <Link to={"/all-books"} >Books</Link></li>
                    <li className='md:mx-4 mt-3 md:mt-0' > <Link to={"/careers"} >Careers</Link></li>
                    <li className='md:mx-4 mt-3 md:mt-0' >  <Link to={"/contact"}>Contact</Link></li>
                </ul>

            </nav>


        </>
    )
}

export default Header