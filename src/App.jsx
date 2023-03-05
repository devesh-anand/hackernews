import { useState, createContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import authContext from "./components/auth/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Newstories from "./components/Newstories";
import Bookmarks from "./components/Bookmark/Bookmarks";

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <div className="App">
      <authContext.Provider value={{ auth, setAuth }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/newstories" element={<Newstories />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>
          {/* <Pagination /> */}
        </Router>
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </authContext.Provider>
    </div>
  );
}

export default App;
