import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { googleLoginAPI, LoginAPI, registerAPI } from "../../Service/allAPI";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { userAuthContext } from "../../Context/Authcontext";

function Auth({ register }) {
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setuserDetails] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const {setauthorisedUser}=useContext(userAuthContext)
  console.log(userDetails);
  const navigate = useNavigate();

  const HandleRegister = async () => {
    const { username, email, password, confirmpassword } = userDetails;
    if (!username || !email || !password || !confirmpassword) {
      alert("Fill the form completely");
    } else {
      // alert("Ready for API Call")
      const result = await registerAPI(userDetails);
      console.log(result);
      if (result.status == 200) {
        toast.success("Registered Successfully");
        setuserDetails({
          username: "",
          email: "",
          password: "",
          confirmpassword: "",
        });
        navigate("/login");
      } else if (result.status == 404) {
        toast.warning(result.response.data);
        setuserDetails({
          username: "",
          email: "",
          password: "",
          confirmpassword: "",
        });
      } else {
        toast.error("something went wrong");
      }
    }
  };

  const handleLogin = async () => {
    const { email, password } = userDetails;
    if (!email || !password) {
      toast.info("Fill the Form Completely");
    } else {
      const result = await LoginAPI(userDetails);
      console.log(result);
      if (result.status == 200) {
        sessionStorage.setItem(
          "existingUser",
          JSON.stringify(result.data.existingUser)
        );
        sessionStorage.setItem("token", result.data.token);
        toast.success(`Login Sucessfull`);
         setauthorisedUser(true)
        if (result.data.existingUser.role == "admin") {
          navigate("/admin-home");
        } else {
          navigate("/");
        }
        setuserDetails({
          username: "",
          email: "",
          password: "",
        });
      } else if (result.status == 404) {
        toast.warning(result.status.data);
        setuserDetails({
          username: "",
          email: "",
          password: "",
        });
      } else {
        toast.error(`Something went wrong`);
        setuserDetails({
          username: "",
          email: "",
          password: "",
        });
      }
    }
  };

  const handleGoogleLogin = async(credentialResponse)=>{
    console.log(credentialResponse.credential);
    const googleData=jwtDecode(credentialResponse.credential)
    console.log(googleData);
    try {
      const result =await googleLoginAPI({username:googleData.name,email:googleData.email,password:"googlepassword",profile:googleData.picture})
      console.log(result);
      if(result.status==200){
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser));
        sessionStorage.setItem("token", result.data.token);
        toast.success("Login Sucessful")
         setauthorisedUser(true)
        if (result.data.existingUser.role == "admin") {
          navigate("/admin-home");
        } else {
          navigate("/");
        }

      }else{
        toast.error("Something went Wrong")
      }
      
      
    } catch (error) {
      console.log(error);
      
      
    }
    
  }



  return (
    <>
      <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url("https://cognizant.scene7.com/is/image/cognizant/insurance-innovation-as-a-service-hero-banner")] bg-cover bg-center'>
        <div className="p-10">
          <h1 className="text-3xl font-bold text-center">BOOKSTORE</h1>
          <div
            style={{ width: "400px" }}
            className="bg-blue-950 text-white p-5 flex flex-col my-5 justify-center items-center "
          >
            <div
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              className="border mb-3 flex justify-center items-center "
            >
              <FaCircleUser className="text-6xl " />
            </div>

            {register ? (
              <h1 className="text-2xl">Register</h1>
            ) : (
              <h1 className="text-2xl">Login</h1>
            )}

            <form action="">
              {register && (
                <div className="my-5">
                  <label htmlFor="">Username</label>
                  <input
                    value={userDetails?.username}
                    onChange={(e) =>
                      setuserDetails({
                        ...userDetails,
                        username: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="username"
                    className="bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black"
                  />
                </div>
              )}

              <div className="my-5">
                <label htmlFor="">Email</label>
                <input
                  value={userDetails?.email}
                  onChange={(e) =>
                    setuserDetails({ ...userDetails, email: e.target.value })
                  }
                  type="text"
                  placeholder="username"
                  className="bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black"
                />
              </div>

              <div className="mt-5 relative">
                <label htmlFor="">password</label>
                <input
                  value={userDetails?.password}
                  onChange={(e) =>
                    setuserDetails({ ...userDetails, password: e.target.value })
                  }
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black"
                />

                <span
                  className="absolute right-3 top-11 cursor-pointer text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {register && (
                <div className="mt-5 relative">
                  <label htmlFor=""> Confirm password</label>
                  <input
                    value={userDetails?.confirmpassword}
                    onChange={(e) =>
                      setuserDetails({
                        ...userDetails,
                        confirmpassword: e.target.value,
                      })
                    }
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black"
                  />

                  <span
                    className="absolute right-3 top-11 cursor-pointer text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              )}

              <div className="mt-2">
                <p className="text-xs text-orange-400">
                  *Never Share your password
                </p>
              </div>

              <div className="mt-4">
                {register ? (
                  <button
                    type="button"
                    onClick={HandleRegister}
                    className="bg-green-700 p-2 w-full rounded"
                  >
                    Register
                  </button>
                ) : (
                  <button
                    onClick={handleLogin}
                    type="button"
                    className="bg-green-700 p-2 w-full rounded"
                  >
                    Login
                  </button>
                )}
              </div>

            {!register &&  <div className="mt-1">
                {/* google authentication */}
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                    handleGoogleLogin(credentialResponse)
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
                
              </div>}

              <div className="mt-3">
                {register ? (
                  <p>
                    Are you Already a user{" "}
                    <Link className="text-blue-400" to={"/login"}>
                      Login
                    </Link>{" "}
                  </p>
                ) : (
                  <p>
                    Are you new user?{" "}
                    <Link className="text-blue-400" to={"/register"}>
                      Register
                    </Link>{" "}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
