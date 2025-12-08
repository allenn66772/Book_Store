import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import { FaBook, FaUserGraduate, FaUsers } from "react-icons/fa";
import { getAllBooksAdminAPI, getUsersInAdminAPI } from "../../Service/allAPI";

function AdminHome() {
  const [allBooks, setallBooks] = useState([]);
  const [token, settoken] = useState("");
  const [allUsers, setallUsers] = useState([]);

  //get books
  const getAllBooks = async () => {
    try {
      const result = await getAllBooksAdminAPI();
      console.log(result);
      setallBooks(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  //get users
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
      settoken(sessionStorage.getItem("token"));
    }
  }, []);

  useEffect(()=>{
    if(token){
      getAllBooks()
      getAllUsers()
    }
  },[])


  return (
    <div>
      <AdminHeader />
      <div className="md:grid grid-cols-[1fr_4fr]">
        <div>
          <AdminSidebar />
        </div>
        <div className="p-4">
          <div className="md:grid grid-cols-3 text-white">
            <div className="px-5">
              <div className="grid grid-cols-[1fr_3fr] bg-blue-700 rounded p-4">
                <div className="flex justify-center items-center">
                  <FaBook className="text-3xl" />
                </div>
                <div>
                  <h1>
                    Total No:of Books:
                    <span className="">{allBooks ? allBooks.length : 0}</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="px-5">
              <div className="grid grid-cols-[1fr_3fr] bg-green-700 rounded p-4">
                <div className="flex justify-center items-center">
                  <FaUsers className="text-3xl" />
                </div>
                <div>
                  <h1>
                    Total No:of Users:
                    <span className="">{allUsers ? allUsers.length : 0}</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="px-5">
              <div className="grid grid-cols-[1fr_3fr] bg-yellow-700 rounded p-4">
                <div className="flex justify-center items-center">
                  <FaUserGraduate className="text-3xl" />
                </div>
                <div>
                  <h1>
                    Total No:of Applicants:<span className="">3</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
