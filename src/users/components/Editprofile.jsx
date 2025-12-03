import React, { useEffect } from "react";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import SERVERURL from "../../Service/ServerURL";

function Editprofile() {
  const [offCanvas, setoffCanvas] = useState(false);
  const [userDetails, setuserDetails] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    bio: "",
    role: "",
    profile: "",
  });
  const [token,settoken]=useState("")
  const [preview ,setpreview]=useState("")
  const [existingProfile,setexistingProfile]=useState("")
  console.log(userDetails);

  const handleImageUpload =(e)=>{
    setuserDetails({...userDetails,profile:e.target.files[0]})
    const url=URL.createObjectURL(e.target.files[0])
    setpreview(url)
  }
  

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
        settoken(sessionStorage.getItem("token"))
        const user=JSON.parse(sessionStorage.getItem("existingUser"))
        setuserDetails({username:user.username,password:user.password,confirmPassword:user.password,bio:user.bio,role:user.role})
        setexistingProfile(user.profile)
    }
  },[])
  return (
    <>
      <button
        onClick={() => setoffCanvas(true)}
        className="flex px-4 py-3 font-bold border hover:bg-blue-600 hover:text-white border-blue-600 text-blue-800"
      >
        <FaRegEdit className="mt-1 me-2" /> Edit
      </button>
      {offCanvas && (
        <div className="">
          <div
            onClick={() => setoffCanvas(false)}
            className="w-full h-full fixed inset-0 bg-gray-600/75"
          ></div>
          <div className="h-full bg-white w-90 z-50 fixed top-0 left-0">
            <div className="bg-gray-900 px-3 py-4 flex justify-between text-white text-2xl">
              <h1>Edit User Profile</h1>
              <button className="" onClick={() => setoffCanvas(false)}>
                X
              </button>
            </div>
            <div className="flex justify-center items-center flex-col my-5">
              <label htmlFor="ProfilePIC">
                <input onChange={(e)=>handleImageUpload(e)}
                  type="file"
                  style={{ display: "none" }}
                  id="ProfilePIC"
                />{existingProfile == "" ?
                     <img className="rounded-full"
                  src={preview?preview:"https://static.vecteezy.com/system/resources/previews/032/176/197/non_2x/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg"}
                  style={{ height: "150px", width: "150px" }}
                  alt=""
                />:
                 <img className="rounded-full"
                  src={preview?preview:`${SERVERURL}/imgUploads/${existingProfile}`}
                  style={{ height: "150px", width: "150px" }}
                  alt=""
                />
                }
               
              </label>
            </div>
            <div className="mt-10 mb-3 w-full px-5">
              <input value={userDetails.username}
                 type=" text" onChange={(e)=>setuserDetails({...userDetails,username:e.target.value})}
                placeholder="Username"
                className="w-full border border-gray-300 placeholder-gray-300 p-2 rounded"
              />
            </div>
            <div className="mt-10 mb-3 w-full px-5">
              <input value={userDetails.password}
                type=" text" onChange={(e)=>setuserDetails({...userDetails,password:e.target.value})}
                placeholder="Password"
                className="w-full border border-gray-300 placeholder-gray-300 p-2 rounded"
              />
            </div>
            <div className="mt-10 mb-3 w-full px-5">
              <input value={userDetails.password}
                type=" text" onChange={(e)=>setuserDetails({...userDetails,confirmPassword:e.target.value})}
                placeholder="Confirm Password"
                className="w-full border border-gray-300 placeholder-gray-300 p-2 rounded"
              />
            </div>
            <div className="mt-10 mb-3 w-full px-5">
              <textarea value={userDetails.bio}
                type=" text" onChange={(e)=>setuserDetails({...userDetails,bio:e.target.value})}
                placeholder="Bio"
                className="w-full border border-gray-300 placeholder-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex justify-end w-full px-5 gap-2">
              <button className="text-white border py-3 px-4 rounded bg-red-600 hover:bg-white hover:text-red-600">
                Reset
              </button>
              <button className="bg-green-500 text-white border py-3 px-4 rounded hover:bg-white hover:text-green-500">
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Editprofile;
