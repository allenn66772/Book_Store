import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ContextShare from "./Context/ContextShare.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Authcontext from "./Context/Authcontext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextShare>
        <GoogleOAuthProvider clientId="678712197590-3vn7rnr42nb70veqgfp19gv8l49t3vne.apps.googleusercontent.com"><Authcontext><App /></Authcontext></GoogleOAuthProvider>
      </ContextShare>
    </BrowserRouter>
  </StrictMode>
);
