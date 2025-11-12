import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { FaArrowUpRightFromSquare, FaLocationDot } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

function AdminCareers() {
  const [jobListstatus, setjobListstatus] = useState(true);
  const [applicantListStatus, setapplicantListStatus] = useState(false);
  return (
    <>
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <h1 className="text-center text-3xl font-bold">Careers</h1>
          <div className="flex justify-center items-center my-8 font-medium text-lg">
            <p
              onClick={() => {
                setjobListstatus(true), setapplicantListStatus(false);
              }}
              className={
                jobListstatus
                  ? "text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer"
                  : "p-4 border-b border-gray-200 cursor-pointer"
              }
            >
              Job List
            </p>
            <p
              onClick={() => {
                setjobListstatus(false), setapplicantListStatus(true);
              }}
              className={
                applicantListStatus
                  ? "text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer"
                  : "p-4 border-b border-gray-200 cursor-pointer"
              }
            >
              Users
            </p>
          </div>
          {jobListstatus && (
            <div className="">
              <div className="md:flex justify-center items-center my-8 w-full md:px-20 px-5">
                <div className="md:flex w-full ms-2 md:ms-0">
                  <input
                    type="text"
                    className="border border-gray-200 p-2 md:w-1/4 m-3/4"
                    placeholder="Search by title"
                  />
                  <button className="bg-green-800 mt-5 md:mt-0 w-20 text-white p-2 rounded md:ms-3 hover:bg-white hover:border hover:border-green-800 hover:text-green-800">
                    Search
                  </button>
                </div>
                <div className="">
                  <button className="bg-green-800 mt-5 md:mt-0 w-full text-white p-2 rounded md:ms-3 hover:bg-white hover:border hover:border-green-800 hover:text-green-800">
                    Add job +
                  </button>
                </div>
              </div>
              <div className="border border-gray-200 p-5 shadow my-5">
                <div className="flex mb-5">
                  <div className="w-full">
                    <h1>FrontEnd Developer</h1>
                    <hr />
                  </div>
                  <button className="bg-red-700 hover:border hover:border-red-800 hover:bg-white hover:text-red-700 text-white p-3 ms-5 flex items-center">
                    Delete
                    <MdDelete className="ms-2" />
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
                  Description: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Officia aut nisi quidem atque nostrum ex
                  dicta, corporis vero doloribus possimus dolore, a obcaecati
                  vitae, inventore id reprehenderit cum harum quo.
                </p>
              </div>
              <p>No Job Openings</p>
            </div>
          )}
          {applicantListStatus && (
            <div className="p-10 ">
              <table className="w-full  my-3 shadow">
                <thead>
                  <tr>
                    <th className="p-3 text-center bg-blue-800 text-white border border-gray-500">
                      Sl.no
                    </th>
                    <th className="p-3 text-center bg-blue-800 text-white border border-gray-500">
                      Job Title
                    </th>
                    <th className="p-3 text-center bg-blue-800 text-white border border-gray-500">
                      Name
                    </th>
                    <th className="p-3 text-center bg-blue-800 text-white border border-gray-500">
                      Qualification
                    </th>
                    <th className="p-3 text-center bg-blue-800 text-white border border-gray-500">
                      E.mail
                    </th>
                    <th className="p-3 text-center bg-blue-800 text-white border border-gray-500">
                      Phone
                    </th>
                    <th className="p-3 text-center bg-blue-800 text-white border border-gray-500">
                      Cover letter
                    </th>
                    <th className="p-3 text-center bg-blue-800 text-white border border-gray-500">
                      Resume
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-500 p-3 text-center">1</td>
                    <td  className="border border-gray-500 p-3 text-center">Software Tester</td>
                    <td className="border border-gray-500 p-3 text-center">Sijo Johnson </td>
                    <td className="border border-gray-500 p-3 text-center"> B.tech</td>
                    <td className="border border-gray-500 p-3 text-center">Sijo@gmail.com</td>
                    <td className="border border-gray-500 p-3 text-center">789446213</td>
                    <td className="border border-gray-500 p-3 text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Excepturi, dolorum animi aut hic officia tenetur ipsam
                      beatae sed, nulla accusantium voluptas eos doloremque vel.
                      Natus consequuntur numquam ab fugiat possimus.
                    </td>
                    <td className="border border-gray-500 p-3 text-center"><Link className='text-blue-500 underline'>Resume</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminCareers;
