import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'


function PaymentError() {
  return (
    <>
    <Header/>
     <div className="grid grid-cols-2 py-20 px-40 justify-center items-center">
        <div>
            <h1 className="text-6xl text-blue-600">Sorry Your payment is unsuccessful ......</h1>
            <p className='mt-5 mb-10'>We Apologize for the inconvinience caused and appreciate your vist to bookstore</p>
            <Link  className='px-4 py-3 bg-blue-600 text-white hover:border hover:border-blue-600 hover:bg-white hover:text-blue-600' to="/all-books">Explore more book</Link>
        </div>
        <div className="">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/payment-error-illustration-svg-download-png-10851557.png" className='ms-30 w-3/4' alt="" />
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default PaymentError