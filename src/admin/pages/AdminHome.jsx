import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { FaBook, FaUserGraduate, FaUsers } from 'react-icons/fa'

function AdminHome() {
  return (
    <div>
      <AdminHeader/>
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div>
          <AdminSidebar/>
        </div>
        <div className='p-4'>
          <div className='md:grid grid-cols-3 text-white'>
            <div className='px-5'>
              <div className='grid grid-cols-[1fr_3fr] bg-blue-700 rounded p-4'>
                <div className='flex justify-center items-center'><FaBook className='text-3xl'/></div>
                  <div>
                    <h1>Total No:of Books:<span className=''>85</span></h1>
                    
                  </div>
              </div>
            </div>
            <div className='px-5'>
              <div className='grid grid-cols-[1fr_3fr] bg-green-700 rounded p-4'>
                <div className='flex justify-center items-center'><FaUsers className='text-3xl'/></div>
                  <div>
                    <h1>Total No:of Users:<span className=''>85</span></h1>
                    
                  </div>
              </div>
            </div>
            <div className='px-5'>
              <div className='grid grid-cols-[1fr_3fr] bg-yellow-700 rounded p-4'>
                <div className='flex justify-center items-center'><FaUserGraduate className='text-3xl'/></div>
                  <div>
                    <h1>Total No:of Applicants:<span className=''>85</span></h1>
                    
                  </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default AdminHome
