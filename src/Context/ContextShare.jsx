// src/Context/ContextShare.jsx
import { createContext, useState } from "react";

// create context
export const userprofileUpdateContext = createContext();
export const adminprofileUpdateContext = createContext();

function ContextShare({ children }) {
  const [userProfileUpdatestatus, setuserProfileUpdatestatus] = useState({});
  const [adminProfileUpdatestatus, setadminProfileUpdatestatus] = useState({});

  return (
    <userprofileUpdateContext.Provider
      value={{ userProfileUpdatestatus, setuserProfileUpdatestatus }}
    >
      <adminprofileUpdateContext.Provider
        value={{ adminProfileUpdatestatus, setadminProfileUpdatestatus }}
      >
        {children}
      </adminprofileUpdateContext.Provider>
    </userprofileUpdateContext.Provider>
  );
}

export default ContextShare;
