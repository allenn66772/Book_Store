import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'

function AdminBooks() {
   const [bookListstatus, setbookListstatus] = useState(true);
  const [userListstatus, setuserListstatus] = useState(false);
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <h1 className="text-center text-3xl font-bold">All Books</h1>
          <div className="flex justify-center items-center my-8 font-medium text-lg">
            <p
              onClick={() => {
                setbookListstatus(true), setuserListstatus(false);
              }}
              className={
                bookListstatus
                  ? "text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer"
                  : "p-4 border-b border-gray-200 cursor-pointer"
              }
            >
              All Books
            </p>
            <p
              onClick={() => {
                setbookListstatus(false), setuserListstatus(true);
              }}
              className={
                userListstatus
                  ? "text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer"
                  : "p-4 border-b border-gray-200 cursor-pointer"
              }
            >
              Users
            </p>
          </div>
          {bookListstatus && (
            <div className="md:grid grid-cols-4 w-full my-5">
              <div className="shadow rounded p-3 m-4">
                <img
                  width={"100%"}
                  height={"300px"}
                  src="https://m.media-amazon.com/images/I/81I6ckN0mxL._UF1000,1000_QL80_.jpg"
                  alt=""
                />
                <div className="flex flex-col justify-center items-center mt-4">
                  <p>Book Name</p>
                  <p>Author Name</p>
                  <p>Discount Price</p>
                  <button className="p-3 rounded border bg-green-700 text-white hover:border-green-400 hover:bg-white hover:text-green-400">
                    Approve
                  </button>
                </div>
              </div>
              <div className="shadow rounded p-3 m-4">
                <img
                  width={"100%"}
                  height={"300px"}
                  src="https://m.media-amazon.com/images/I/81I6ckN0mxL._UF1000,1000_QL80_.jpg"
                  alt=""
                />
                <div className="flex flex-col justify-center items-center mt-4">
                  <p>Book Name</p>
                  <p>Author Name</p>
                  <p>Discount Price</p>
                  <button className="p-3 rounded border bg-green-700 text-white hover:border-green-400 hover:bg-white hover:text-green-400">
                    Approve
                  </button>
                </div>
              </div>
              <div className="shadow rounded p-3 m-4">
                <img
                  width={"100%"}
                  height={"300px"}
                  src="https://m.media-amazon.com/images/I/81I6ckN0mxL._UF1000,1000_QL80_.jpg"
                  alt=""
                />
                <div className="flex flex-col justify-center items-center mt-4">
                  <p>Book Name</p>
                  <p>Author Name</p>
                  <p>Discount Price</p>
                  <button className="p-3 rounded border bg-green-700 text-white hover:border-green-400 hover:bg-white hover:text-green-400">
                    Approve
                  </button>
                </div>
              </div>
            </div>
          )}
          {userListstatus && (
            <div className="md:grid grid-cols-3 w-full my-5">
              <div className="shadow rounded p-2 m-2 bg-gray-200">
                <p className="text-red-500 font-bold ">ID:7545545445</p>
                <div className="flex items-center mt-3">
                  <img
                    width={"100px"}
                    height={"100px"}
                    style={{ borderRadius: "50%" }}
                    src=""
                    alt=""
                  />
                  <div className="flex flex-col ml-3 w-full">
                    <p className="text-blue-800 text-lg">Username</p>
                    <p>Email</p>
                  </div>
                </div>



              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminBooks
