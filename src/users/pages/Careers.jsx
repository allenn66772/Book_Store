import React, { useState } from "react";
import Header from "../../common/components/Header";
import Footer from "../../common/components/Footer";
import { IoMdCloseCircle } from "react-icons/io";
import { FaArrowUpRightFromSquare, FaLocationDot } from "react-icons/fa6";

function Careers() {
  const [applyStatus, setapplyStatus] = useState(false);
  return (
    <>
      <Header />
      <div className="md:px-40 p-5">
        <div className="text-center my-5">
          <h1 className="text-3xl font-bold mb-5">Careers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et
            perspiciatis fugit provident quod tenetur nisi quisquam reiciendis
            ab eos molestias voluptates optio, corrupti nesciunt. Dolorem
            accusamus sed rem eligendi?
          </p>
        </div>
        <div className="my-10">
          <h1 className="text-2xl font-bold">Current Openings</h1>
          <div className="flex my-10 justify-center items-center">
            <input
              type="text"
              className="p-2 border border-gray-200 text-black w-100 placeholder-gray-500"
              placeholder="Search by title"
            />
            <button className="bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border hover:border-blue-800">
              Search
            </button>
          </div>
        </div>

        {/* job listing */}

        <div className="border border-gray-200 p-5 shadow my-5">
          <div className="flex mb-5">
            <div className="w-full">
              <h1>FrontEnd Developer</h1>
              <hr />
            </div>
            <button
              onClick={() => setapplyStatus(true)}
              className=" border bg-blue-900 text-white p-3 ms-5 flex items-center  hover:border-blue-600 hover:text-blue-600 hover:bg-white"
            >
              Apply
              <FaArrowUpRightFromSquare className="ms-2" />
            </button>
          </div>
          <p className="flex">
            <FaLocationDot className="me-2 mt-1" />
            Kochi
          </p>
          <p className="flex">salary:20000-30000/month</p>
          <p className="text-lg my-2">Job Type:Full Time</p>
          <p className="text-lg my-2">Qualification:BSC.CS</p>
          <p className="text-lg my-2">Experience:1-2 yr</p>
          <p className="text-lg my-2 text-justify">
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Officia aut nisi quidem atque nostrum ex dicta, corporis vero
            doloribus possimus dolore, a obcaecati vitae, inventore id
            reprehenderit cum harum quo.
          </p>
        </div>
      </div>
      {/* Modal */}
      {applyStatus && (
        <div className="relative z-10 overflow-y-hidden">
          <div className="bg-gray-500/75 fixed inset-0">
            <div className="flex justify-center items-center min-h-screen scroll-auto">
              <div className="bg-white rounded-2xl md:w-150 h-auto">
                <div className=" rounded-2xl text-white flex justify-between items-center p-3">
                  <h3 className= "font-bold text-2xl text-black">Application Form</h3>
                  <button onClick={() => setapplyStatus(false)} className="text-red-600 text-2xl">
                    {" "}
                  <IoMdCloseCircle />
                  </button>
                </div>
               
                <div className="md:grid grid-cols-2">
                  <div className="md:mt-5  px-2">
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Title"
                        className="border border-gray-300 p-2 bg-white rounded w-full"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Email ID"
                        className="border border-gray-300 p-2 bg-white rounded w-full"
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        type="text"
                        placeholder="cover letter"
                        className="border border-gray-300 p-2 bg-white rounded w-full"
                      />
                    </div>
                  </div>
                  <div className="md:mt-5 px-2">
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Qualification"
                        className="border border-gray-300 p-2 bg-white rounded w-full"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Phone"
                        className="border border-gray-300 p-2 bg-white rounded w-full"
                      />
                    </div>
                  </div>
                   <div className="mt-6 flex flex-col items-start ms-5 my-5">
              <p className="mb-2 text-gray-700">Upload Resume</p>
              <input type="file" className="hidden" id="uploadBtn" />
              <label
                htmlFor="uploadBtn"
                className="border cursor-pointer bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-white hover:text-blue-700 "
              >
                Upload File
              </label>
            </div>
                </div>
            <div className=" flex justify-end my-2  mx-5 ">
  <button className="border cursor-pointer bg-red-700 rounded p-3 ms-3 text-white hover:bg-white hover:text-red-700">Reset</button>
  <button className="border bg-green-800 cursor-pointer rounded p-3 ms-3 text-white hover:bg-white hover:text-green-800">Submit</button>
</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Careers;
