// src/Context/ContextShare.jsx
import { createContext, useState } from "react";

// create context
export const userprofileUpdateContext = createContext();

function ContextShare({ children }) {
  const [userProfileUpdatestatus, setuserProfileUpdatestatus] = useState(false);

  return (
    <userprofileUpdateContext.Provider value={{ userProfileUpdatestatus, setuserProfileUpdatestatus }}>
      {children}
    </userprofileUpdateContext.Provider>
  );
}

export default ContextShare;
