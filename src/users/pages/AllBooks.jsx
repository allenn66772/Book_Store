import React from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { Link } from 'react-router-dom'

function AllBooks() {
  return (
    <>
    <Header/>
    <div className='flex justify-center items-center flex-col my-5'>
      <h1 className='text-3xl font-bold my-5'>Collections</h1>
      <div className='flex my-5'>
        <input type='text' className='p-2 border border-gray-200 text-black w-100 placeholder-gray-500' placeholder='Search by title'/>
        <button className='bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border hover:border-blue-800'>Search</button>
      </div>
    </div>
    <div className='md:grid grid-cols-4 md:px-20 p-5 mb-10'>
      
      {/* filter */}

      <div className='col-span-1'>
        <h1>Filters</h1>

        <div className='mt-5'>
          <input type='radio' />
          <label htmlFor='' className='ms-2'>Literary Fiction</label>
        </div>
         <div className='mt-5'>
          <input type='radio' />
          <label htmlFor='' className='ms-2'>Literary Fiction</label>
        </div>

         <div className='mt-5'>
          <input type='radio' />
          <label htmlFor='' className='ms-2'>Literary Fiction</label>
        </div>

         <div className='mt-5'>
          <input type='radio' />
          <label htmlFor='' className='ms-2'>Literary Fiction</label>
        </div>

         <div className='mt-5'>
          <input type='radio' />
          <label htmlFor='' className='ms-2'>Literary Fiction</label>
        </div>

         <div className='mt-5'>
          <input type='radio' id='Literary Fiction' />
          <label htmlFor='' className='ms-2'>Literary Fiction</label>
        </div>

         <div className='mt-5'>
          <input type='radio' />
          <label htmlFor='' className='ms-2'>Literary Fiction</label>
        </div>

         <div className='mt-5'>
          <input type='radio' />
          <label htmlFor='' className='ms-2'>Literary Fiction</label>
        </div>

         <div className='mt-5'>
          <input type='radio' />
          <label htmlFor='' className='ms-2'>No Filter</label>
        </div>

      </div>

      <div className='col-span-3'>
        <div className='md:grid grid-cols-4 mt-5 md:mt-0'>
          <div className='shadow rounded p-3 mx-4 my-3'>
            <img src='https://m.media-amazon.com/images/I/81I6ckN0mxL._UF1000,1000_QL80_.jpg' width={"100%"} height={"300px"}/>
            <div className='flex flex-col justify-center items-center mt-4'>
              <p>Book Title</p>
              <p>Author</p>
              <Link to={"/view-books/1"} className='bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border hover:border-blue-800 w-full text-center '>View Book</Link>
            </div>

            

          </div>

           <div className='shadow rounded p-3 mx-4 my-3'>
            <img src='https://m.media-amazon.com/images/I/81I6ckN0mxL._UF1000,1000_QL80_.jpg' width={"100%"} height={"300px"}/>
            <div className='flex flex-col justify-center items-center mt-4'>
              <p>Book Title</p>
              <p>Author</p>
              <Link to={"/view-books/1"} className='bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border hover:border-blue-800 w-full text-center '>View Book</Link>
            </div>

            

          </div>


           <div className='shadow rounded p-3 mx-4 my-3'>
            <img src='https://m.media-amazon.com/images/I/81I6ckN0mxL._UF1000,1000_QL80_.jpg' width={"100%"} height={"300px"}/>
            <div className='flex flex-col justify-center items-center mt-4'>
              <p>Book Title</p>
              <p>Author</p>
              <Link to={"/view-books/1"} className='bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border hover:border-blue-800 w-full text-center '>View Book</Link>
            </div>

            

          </div>


           <div className='shadow rounded p-3 mx-4 my-3'>
            <img src='https://m.media-amazon.com/images/I/81I6ckN0mxL.UF1000,1000_QL80.jpg' width={"100%"} height={"300px"}/>
            <div className='flex flex-col justify-center items-center mt-4'>
              <p>Book Title</p>
              <p>Author</p>
              <Link to={"/view-books/1"} className='bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border hover:border-blue-800 w-full text-center '>View Book</Link>
            </div>

            

          </div>
        </div>

      </div>

    </div>

    <div className='my-10 flex justify-center items-center flex-col'>
      <img src='https://cdn-icons-gif.flaticon.com/11255/11255957.gif' alt='' width={"400px"}/>
      <p className='font-semibold text-xl mt-5'>Please <Link to={"/login"} className='text-blue-700 font-bold'> Login </Link> to Explore More</p>

    </div>




    <Footer/>
    
    </>
  )
}

export default AllBooks