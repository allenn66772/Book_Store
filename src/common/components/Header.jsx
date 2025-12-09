import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import SERVERURL from "../../Service/ServerURL";
import { toast } from "react-toastify";

function Header() {
  const [listStatus, setListStatus] = useState(false);
  const [dropDownStatus, setdropDownStatus] = useState(false);
  const [username, setusername] = useState("");
  const [userProfile, setuserProfile] = useState("");
  const [token, settoken] = useState("");
  // console.log(token);
  const navigate = useNavigate();

  const handlelogout = () => {
    sessionStorage.removeItem("existingUser");
    sessionStorage.removeItem("token");

    settoken("");
    setusername("");
    setuserProfile("");
    toast.success("Logout Succesfull")
    navigate("/");
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      settoken(sessionStorage.getItem("token"));
    }
    if (sessionStorage.getItem("existingUser")) {
      const name = JSON.parse(sessionStorage.getItem("existingUser"));
      setusername(name.username);
      const existingProfile = JSON.parse(
        sessionStorage.getItem("existingUser")
      );
      setuserProfile(existingProfile.profile);
    }
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 p-3 ">
        {/* logo */}

        <div className="flex items-center">
          <img
            width={"50px"}
            height={"80px"}
            src="https://pngfre.com/wp-content/uploads/book-png-image-pngfre-26-300x264.png"
            alt=""
          />
          <h1 className="font-bold text-2xl ms-2 md:hidden">BOOKSTORE</h1>
        </div>

        {/* title */}
        <div className="md:flex justify-center items-center hidden">
          <h1 className="text-3xl font-bold">BOOKSTORE</h1>
        </div>

        {/* login */}

        <div className="md:flex justify-end items-center hidden">
          <FaInstagramSquare className="me-3 text-2xl" />
          <FaFacebookSquare className="me-3 text-2xl" />
          <FaLinkedin className="me-3 text-2xl" />
          {!token ? (
            <Link to={"/login"}>
              <button
                className="flex justify-between items-center border border-black rounded px-3 py-2 ms-3 
                            hover:bg-black hover:text-white"
              >
                <FaRegUser />
                Login
              </button>
            </Link>
          ) : (
            <div className="relative inline-block text-left">
              <button
                onClick={() => setdropDownStatus(!dropDownStatus)}
                className="w-full flex items-center px-3 py-2  shadow-lg"
              >
                <img
                  src={
                    userProfile.startsWith("https")
                      ? userProfile
                      : `${SERVERURL}/imgUploads/${userProfile}`
                  }
                  width={"50px"}
                  height={"50px"}
                  alt=""
                />
                <p className="ms-2">{username}</p>
              </button>
              {dropDownStatus && (
                <div className="absolute right-0-z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-70"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handlelogout}
                    className="block px-4 py-2 text-sm text-gray-70"
                  >
                    {" "}
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <nav className=" w-full  bg-gray-900 text-white p-3 md:flex justify-center items-center">
        <div className="flex justify-between  items-center md:hidden ">
          <button onClick={() => setListStatus(!listStatus)}>
            {" "}
            <TiThMenu className="text-2xl" />
          </button>

          <Link to={"/login"}>
            <button
              className="flex justify-between items-center border border-black rounded px-3 py-2 ms-3 
                            hover:bg-black hover:text-white"
            >
              <FaRegUser />
              Login
            </button>
          </Link>
        </div>
        <ul
          className={
            listStatus
              ? "flex flex-col"
              : "md:flex justify-center items-center hidden"
          }
        >
          <li className="md:mx-4 mt-3 md:mt-0">
            {" "}
            <Link to={"/"}>Home</Link>
          </li>
          <li className="md:mx-4 mt-3 md:mt-0">
            {" "}
            <Link to={"/all-books"}>Books</Link>
          </li>
          <li className="md:mx-4 mt-3 md:mt-0">
            {" "}
            <Link to={"/careers"}>Careers</Link>
          </li>
          <li className="md:mx-4 mt-3 md:mt-0">
            {" "}
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
