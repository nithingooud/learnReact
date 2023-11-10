import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/Contact.js";
import Navbar from "./Navbar";
import Profile from "./pages/Profile";
import { useState, useContext } from "react";
import { createContext } from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();
const DomReact = () => {
  // const client = new QueryClient();
  const [username, setusername] = useState("Nithin");
  return (
    <div className="App">
      {/* <QueryClientProvider> */}
      <AppContext.Provider value={{ username, setusername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </AppContext.Provider>
      {/* </QueryClientProvider> */}
    </div>
  );
};

export default DomReact;
