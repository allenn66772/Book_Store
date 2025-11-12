import React from 'react'
import { FaGraduationCap, FaHome } from "react-icons/fa";
import { IoMdSettings } from 'react-icons/io';
import { PiBook, PiBooks } from 'react-icons/pi';
import { Link } from 'react-router-dom';
function AdminSidebar() {
  return (
    <>
      <div className='bg-gray-200 w-full md:min-h-screen flex items-center flex-col'>
        <div className='my-10'>
            <img src='https://tse2.mm.bing.net/th/id/OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa?pid=Api&P=0&h=180' style={{width:"150px",height:"150px",borderRadius:"50%"}} alt='profile img'/>
        </div>
        <h1 className='text-2xl mb-10'>Ann Joseph</h1>
        <div className='mb-10'>
            <Link to='/admin-home'>
              <div className='mb-4 flex'>
                  <input type='radio' id='home' readOnly/>
                  <label htmlFor='home' className='flex ms-3'><FaHome className='mt-1 me-1'/>Home</label>
              </div>
            </Link>
            <Link to='/admin-books'>
              <div className='mb-4 flex'>
                  <input type='radio' id='books' readOnly/>
                  <label htmlFor='books' className='flex ms-3'><PiBooks className='mt-1 me-1'/>Books</label>
              </div>
            </Link>
            <Link to='/admin-careers'>
              <div className='mb-4 flex'>
                  <input type='radio' id='careers' readOnly/>
                  <label htmlFor='careers' className='flex ms-3'><FaGraduationCap className='mt-1 me-1'/>Home</label>
              </div>
            </Link>
           <Link to='/admin-settings'>
              <div className='mb-4 flex'>
                  <input type='radio' id='settings' readOnly/>
                  <label htmlFor='settings' className='flex ms-3'><IoMdSettings className='mt-1 me-1'/>Home</label>
              </div>
           </Link>
        </div>
      </div>
    </>
  )
}

export default AdminSidebar
