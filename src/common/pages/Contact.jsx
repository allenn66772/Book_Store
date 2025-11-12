import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <>
    <Header/>
    <section className="bg-white  py-12 px-4 sm:px-8 lg:px-20">
      {/* Heading */}
      <h2 className="text-3xl text-red-900 sm:text-4xl font-semibold text-center mb-4">
        Contacts
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        inventore placeat nemo voluptatem iure, iste asperiores quia amet sint,
        similique corrupti praesentium delectus nesciunt odit laudantium.
      </p>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-12 mb-12 text-center">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <FaMapMarkerAlt className="text-gray-700 text-2xl" />
          <p className="text-sm sm:text-base">
            123 Main Street, Apt 4B, <br /> Anytown, CA 91234
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <FaPhoneAlt className="text-gray-700 text-2xl" />
          <p className="text-sm sm:text-base">+91 9874561230</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <FaEnvelope className="text-gray-700 text-2xl" />
          <p className="text-sm sm:text-base">Bookstore@gmail.com</p>
        </div>
      </div>

      {/* Form + Map Section */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
        {/* Form */}
        <form className="bg-gray-100 shadow-md rounded-xl p-6 w-full lg:w-1/2">
          <h3 className="text-center text-lg font-semibold mb-4">
            Send me a Message
          </h3>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Email Id"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm sm:text-base"
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm sm:text-base"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition duration-300 text-sm sm:text-base"
          >
            Send →
          </button>
        </form>

        {/* Google Map */}
        <div className="w-full lg:w-1/2 h-64 sm:h-95 border rounded-xl overflow-hidden shadow-md">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Kakkanad,Kerala&output=embed"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>

    <Footer/>


    </>
  )
}

export default Contact
