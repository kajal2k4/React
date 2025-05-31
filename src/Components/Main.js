import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Props from "./Props";
import Product from "./Product";
import Profile from "./Profile";
import Setting from "./Setting";
import Timer from "./Timer";
import 'bootstrap/dist/css/bootstrap.min.css';
// import About from './about';
// import Contact from './Contact';
// import NoPage from './noPage';
import "./Main.css";

export default function Main() {
  return (
    // <Router>
    //     <div classfirstName='main-route'>
    //         <ul classfirstName='main-router'>
    //             <li><Link to="/">Home</Link></li>
    //             <li><Link to="/About">About</Link></li>
    //             <li><Link to="/Contact">Contact</Link></li>
    //         </ul>
    //     </div>
    //     <Routes>
    //         <Route path='/' element={<Home />} />
    //         <Route path='About' element={<About />} />
    //         <Route path='Contact' element={<Contact />} />
    //         <Route path='*' element={<NoPage />} />
    //     </Routes>
    // </Router>

    <Router className="bg-aqua">
      <div className="main-route">
        <ul className="main-router">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Props">Props</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/Setting">Setting</Link>
          </li>
          <li>
            <Link to="/Product">Product</Link>
          </li>
          <li>
            <Link to="/Timer">Timer</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="Props"
          element={
            <>
              <h1 className='text-center'>Hello World</h1>
              <Props firstName="Kajal" lastName="Yadav" />
              <Props firstName="ABC" lastName="XYZ" />
            </>
          }
        />

        <Route path="Profile" element={<Profile />} />
        <Route path="Setting" element={<Setting />} />
        <Route path="Product" element={
        <>
            <Product name="laptop" price="500000" />
            <Product name="Tv" price="500000" />
            <Product name='Mobile' price="500000" />
        </>
        } />
        <Route path="Timer" element={<Timer />} />
      </Routes>
    </Router>
  );
}
