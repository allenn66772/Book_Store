import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { registerAPI } from '../../Service/allAPI'

function Auth({register}) {
  const [showPassword, setShowPassword] = useState(false)
  const [userDetails,setuserDetails]=useState({
    username:"",
    email:"",
    password:""
  })
  console.log(userDetails);

  const HandleRegister =async()=>{
    const {username,email,password}=userDetails
    if(!username||!email||!password){
      alert("Fill the form completely")
    }else{
      alert("Ready for API Call")
      const result =await registerAPI(userDetails)
      console.log(result);
      
    }
  }
  
  return (
    <>
      <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfo7sSzB9Vzxn4UrN8o0HmqkqoXxW4fXm5Q&s")] bg-cover bg-center'>
        <div className='p-10'>
          <h1 className='text-3xl font-bold text-center'>BOOKSTORE</h1>
          <div style={{ width: "400px" }} className='bg-blue-950 text-white p-5 flex flex-col my-5 justify-center items-center '>
            <div style={{ width: "100px", height: "100px", borderRadius: "50%" }} className='border mb-3 flex justify-center items-center '>
              <FaCircleUser className='text-6xl ' />
 
            </div>
            
              { register ? <h1 className='text-2xl'>Register</h1> :<h1 className='text-2xl'>Login</h1>}
              

            <form action="">
              {register && ( <div className='my-5'>
                <label htmlFor=''>Username</label>
                <input value={userDetails?.username} onChange={(e)=>setuserDetails({...userDetails,username:e.target.value})} type='text' placeholder='username' className='bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black' />


              </div>)}
              

              <div className='my-5'>
                <label htmlFor=''>Email</label>
                <input value={userDetails?.email} onChange={(e)=>setuserDetails({...userDetails,email:e.target.value})} type='text' placeholder='username' className='bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black' />


              </div>

              <div className='mt-5 relative'>
                <label htmlFor=''>password</label>
                <input value={userDetails?.password}  onChange={(e)=>setuserDetails({...userDetails,password:e.target.value})} type={showPassword ? "text":"password"} placeholder='password' className='bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black' />

                <span className='absolute right-3 top-11 cursor-pointer text-gray-700' onClick={()=>setShowPassword(!showPassword)}>
                  {showPassword? <FaEye />:<FaEyeSlash/>}

                </span>




              </div>

              <div className='mt-2'>
                <p className='text-xs text-orange-400'>*Never Share your password</p>

              </div>

              <div className='mt-4'>
                { register ? <button type='button' onClick={HandleRegister} className='bg-green-700 p-2 w-full rounded'>Register</button> :
                <button type='button' className='bg-green-700 p-2 w-full rounded'>Login</button>}

              </div>
              
              <div>
                {/* google authentication */}
              </div>

              <div className='mt-3'>
              
                  {register ? <p>Are you Already a user <Link className='text-blue-400' to={"/login"} >Login</Link> </p>:
                  <p>Are you new user? <Link className='text-blue-400' to={"/register"} >Register</Link> </p>}
               

              </div>
              


            </form>

          </div>

        </div>

      </div>
    </>
  )
}

export default Auth