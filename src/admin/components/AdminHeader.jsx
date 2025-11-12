import React from 'react'
import { FaRegUser } from "react-icons/fa";


function AdminHeader() {
    return (
        <>
            <nav className='px-5 py-3 flex items-center'>
                {/* logo */}
                <div className='flex items-center'>
                    <img width={"50px"} height={"80px"} src="https://pngfre.com/wp-content/uploads/book-png-image-pngfre-26-300x264.png" alt="" />
                    <h1 className='font-bold text-2xl ms-2 md:hidden'>BOOKSTORE</h1>
                </div>
                {/* login */}
                <div className='ms-auto'>
                    <button className='flex justify-between items-center border border-black rounded px-4 py-2 ms-3 
                    hover:bg-black hover:text-white'><FaRegUser />Logout</button>
                </div>
            </nav>
        </>


    )
}

export default AdminHeader
