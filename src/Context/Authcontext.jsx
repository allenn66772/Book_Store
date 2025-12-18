import React, { createContext, useEffect, useState } from 'react'


export const userAuthContext=createContext("")
function Authcontext({children}) {
    const[role,setRole]=useState("")
    const [authorisedUser,setauthorisedUser]=useState(false)

    useEffect(()=>{
        if(sessionStorage.getItem("existingUser")&& sessionStorage.getItem("token")){
            const user=JSON.parse(sessionStorage.getItem("existingUser"))
            setRole(user.role)
            setauthorisedUser(true)

        }
    },[role,authorisedUser])
  return (
    <userAuthContext.Provider value={{role,authorisedUser,setauthorisedUser}}>{children} </userAuthContext.Provider>
  )
}

export default Authcontext