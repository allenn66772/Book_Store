import React, { useContext, useEffect, useState } from 'react'
import { FaGraduationCap, FaHome } from "react-icons/fa";
import { IoMdSettings } from 'react-icons/io';
import { PiBooks } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import SERVERURL from '../../Service/ServerURL';
import { adminprofileUpdateContext } from '../../Context/ContextShare';

function AdminSidebar() {
  const [adminName, setAdminName] = useState("");
  const [existingprofile,setexistingUser]=useState("")
  const {adminProfileUpdatestatus}=useContext(adminprofileUpdateContext)

  useEffect(() => {
   setAdminName(JSON.parse(sessionStorage.getItem("existingUser")).username)
   setexistingUser(JSON.parse(sessionStorage.getItem("existingUser")).profile)
    
  }, [adminProfileUpdatestatus]);

  return (
    <>
      <div className='bg-gray-200 w-full md:min-h-screen flex items-center flex-col'>
        
        {/* Profile Image */}
        <div className='my-10'>
          <img 
            src={existingprofile ==""?'https://tse2.mm.bing.net/th/id/OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa?pid=Api&P=0&h=180':`${SERVERURL}/imgUploads/${existingprofile}`} 
            width="150" 
            height="150" 
            style={{ borderRadius: "50%" }} 
            alt='profile'
          />
        </div>

        {/* Admin Name */}
        <h1 className='text-2xl mb-10'>{adminName}</h1>

        {/* Menu */}
        <div className='mb-10'>
          
          <Link to='/admin-home'>
            <div className='mb-4 flex'>
              <input type='radio' id='home' readOnly />
              <label htmlFor='home' className='flex ms-3'>
                <FaHome className='mt-1 me-1' /> Home
              </label>
            </div>
          </Link>

          <Link to='/admin-books'>
            <div className='mb-4 flex'>
              <input type='radio' id='books' readOnly />
              <label htmlFor='books' className='flex ms-3'>
                <PiBooks className='mt-1 me-1' /> Books
              </label>
            </div>
          </Link>

          <Link to='/admin-careers'>
            <div className='mb-4 flex'>
              <input type='radio' id='careers' readOnly />
              <label htmlFor='careers' className='flex ms-3'>
                <FaGraduationCap className='mt-1 me-1' /> Careers
              </label>
            </div>
          </Link>

          <Link to='/admin-settings'>
            <div className='mb-4 flex'>
              <input type='radio' id='settings' readOnly />
              <label htmlFor='settings' className='flex ms-3'>
                <IoMdSettings className='mt-1 me-1' /> Settings
              </label>
            </div>
          </Link>

        </div>
      </div>
    </>
  );
}

export default AdminSidebar;
