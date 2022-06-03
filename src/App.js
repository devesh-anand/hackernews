import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Newstories from "./components/Newstories";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/newstories" element={<Newstories/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
