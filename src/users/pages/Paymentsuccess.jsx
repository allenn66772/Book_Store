import React from 'react'
import { Link } from 'react-router-dom'

function Paymentsuccess() {
  return (
    <>
    <div className="grid grid-cols-2 py-20 px-40 justify-center items-center">
        <div>
            <h1 className="text-6xl text-blue-600">Congratulations......</h1>
            <p className='mt-5 mb-10'>Thank You Continue Shopping with us</p>
            <Link to="/all-books">Explore more book</Link>
        </div>
        <div className="">
            <img src="https://funtura.in/wp-content/themes/funtura/assets/images/success.svg" className='ms-30 w-3/4' alt="" />
        </div>
    </div>
    </>
  )
}

export default Paymentsuccess