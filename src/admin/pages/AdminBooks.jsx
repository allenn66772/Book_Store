import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import {
  approveBookStatusAPI,
  getAllBooksAdminAPI,
  getUsersInAdminAPI,
} from "../../Service/allAPI";
import { FcApproval } from "react-icons/fc";

function AdminBooks() {
  const [bookListstatus, setbookListstatus] = useState(true);
  const [userListstatus, setuserListstatus] = useState(false);
  const [allUsers, setallUsers] = useState([]);
  const [allBooks, setallBooks] = useState([]);
  const [token, setToken] = useState("");

  const getAllBooks = async () => {
    try {
      const result = await getAllBooksAdminAPI();
      console.log(result);
      setallBooks(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const approveBooks = async (id) => {
    console.log(id);

    try {
      const result = await approveBookStatusAPI(id);
      console.log(result);
      getAllBooks();
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUsers = async () => {
    try {
      const reqHeader = { Authorization: `Bearer ${token}` };
      const result = await getUsersInAdminAPI(reqHeader);
      console.log(result);
      if (result.status == 200) {
        setallUsers(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
       sessionStorage.getItem("token")
      setToken(token)
    }
  }, []);



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
                getAllUsers();
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
              {allBooks?.length > 0 ? (
                allBooks?.map((book, index) => (
                  <div className="shadow rounded p-3 m-4">
                    <img
                      width={"100%"}
                      height={"300px"}
                      src={book?.imageURL}
                      alt=""
                    />
                    <div className="flex flex-col justify-center items-center mt-4">
                      <p>{book?.title}</p>
                      <p>{book?.author}</p>
                      <p>{book?.discountPrice}</p>
                      {book?.status == "pending" && (
                        <button
                          onClick={() => approveBooks(book?._id)}
                          className="p-3 rounded border bg-green-700 text-white hover:border-green-400 hover:bg-white hover:text-green-400"
                        >
                          Approve
                        </button>
                      )}
                      {book?.status == "approved" && (
                        <div className="w-full flex justify-end">
                          <FcApproval
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p>No Books Available....</p>
              )}
            </div>
          )}
          {userListstatus && (
            <div className="md:grid grid-cols-3 w-full my-5">
              {allUsers.length > 0 ? (
                allUsers.map((book, item) => (
                  <div className="shadow rounded p-2 m-2 bg-gray-200">
                    <p className="text-red-500 font-bold ">{book?._id}</p>
                    <div className="flex items-center mt-3">
                      <img
                        width={"100px"}
                        height={"100px"}
                        style={{ borderRadius: "50%" }}
                        src={book?.profile}
                        alt=""
                      />
                      <div className="flex flex-col ml-3 w-full">
                        <p className="text-blue-800 text-lg">
                          {book?.username}
                        </p>
                        <p>{book?.email}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>no users Available</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminBooks;
