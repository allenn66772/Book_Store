import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import SERVERURL from "../../Service/ServerURL";
import { toast } from "react-toastify";
import { userAuthContext } from "../../Context/Authcontext";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [userProfile, setUserProfile] = useState("");
  const [token, setToken] = useState("");

  const navigate = useNavigate();
  const { setauthorisedUser } = useContext(userAuthContext);

  const handleLogout = () => {
    sessionStorage.removeItem("existingUser");
    sessionStorage.removeItem("token");
    setToken("");
    setUsername("");
    setUserProfile("");
    setauthorisedUser(false);
    toast.success("Logout successful");
    navigate("/");
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    const storedUser = sessionStorage.getItem("existingUser");

    if (storedToken) setToken(storedToken);
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUsername(user.username);
      setUserProfile(user.profile);
    }
  }, []);

  return (
    <>
      {/* TOP HEADER */}
      <header className="grid grid-cols-2 md:grid-cols-3 items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://pngfre.com/wp-content/uploads/book-png-image-pngfre-26-300x264.png"
            alt="logo"
            className="w-10 h-auto"
          />
          <h1 className="font-bold text-xl ml-2 md:hidden">BOOKSTORE</h1>
        </div>

        {/* Title */}
        <div className="hidden md:flex justify-center">
          <h1 className="text-3xl font-bold">BOOKSTORE</h1>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex justify-end items-center gap-4">
          <FaInstagramSquare className="text-2xl cursor-pointer" />
          <FaFacebookSquare className="text-2xl cursor-pointer" />
          <FaLinkedin className="text-2xl cursor-pointer" />

          {!token ? (
            <Link to="/login">
              <button className="flex items-center gap-2 border border-black rounded px-3 py-2 hover:bg-black hover:text-white transition">
                <FaRegUser /> Login
              </button>
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropDownOpen(!dropDownOpen)}
                className="flex items-center gap-2 px-3 py-2 shadow rounded"
              >
                <img
                  src={
                    userProfile?.startsWith("https")
                      ? userProfile
                      : `${SERVERURL}/imgUploads/${userProfile}`
                  }
                  className="w-10 h-10 rounded-full object-cover"
                  alt="profile"
                />
                <span>{username}</span>
              </button>

              {dropDownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow rounded z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setDropDownOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* NAVBAR */}
      <nav className="bg-gray-900 text-white px-4 py-3">
        <div className="flex justify-between items-center md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <TiThMenu className="text-2xl" />
          </button>

          {!token && (
            <Link to="/login">
              <button className="flex items-center gap-2 border border-white rounded px-3 py-1">
                <FaRegUser /> Login
              </button>
            </Link>
          )}
        </div>

        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:justify-center md:items-center gap-4 mt-4 md:mt-0`}
        >
          <li>
            <Link onClick={() => setMenuOpen(false)} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} to="/all-books">
              Books
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} to="/careers">
              Careers
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
