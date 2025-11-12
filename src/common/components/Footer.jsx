import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className='md:grid grid-cols-3 md:gap-9 bg-gray-900 text-white p-10'>
                <div>
                    <h3 className='text-bold'>About Us</h3>
                    <p className='text-justify mt-3'>Welcome to Bookstore, your one-stop destination for every kind of reader. We offer a wide collection of books across genres, from timeless classics to modern bestsellers. Our</p>
                </div>
                <div>
                    <h3 className='font-bold'>NEWLETTER</h3>
                    <p className='my-5'>Stay updated with our latest trends</p>
                    <div className='flex'>
                        <input type='text' placeholder='Email Id' className='p-2 bg-white placeholder-gray-500' />
                        <button className='bg-yellow-400 p-3'><FaArrowRight /></button>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold'>Follow Us</h3>
                    <p className='my-5'>Let's us be social</p>
                    <div className='flex'>
                        <FaInstagram className='me-3 text-2xl'/>
                        <FaXTwitter className='me-3 text-2xl'/>
                        <FaFacebookSquare className='me-3 text-2xl'/>
                        <FaLinkedin className='me-3 text-2xl'/>

                    </div>
                </div>
            </div>
            <div className='bg-black p-3 text-center text-white'>
                <p>Copyright @ 2025 All rights reserved  |  This webiste is made with &#10084; by Emil Joseph  |  LUMINAR TECHNOLAB KOCHI</p>
            </div>

        </>
    )
}

export default Footer
