import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import Home from "./component/Home";
import About from "./component/About";
import User from "./component/User";

function App() {
  return (
    <div className="App">
   
       <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/User">User</Link>
        </li>
       </ul>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/user" element={<User/>} />
        </Routes>
    </div>
  );
}


export default App;

