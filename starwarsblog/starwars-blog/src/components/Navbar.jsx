import React from "react";
import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <span>
          <Link to="/">
            {" "}
            <BiCameraMovie className="site-icon" /> Home
          </Link>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/characters">Chars</Link>
            </li>
            <li className="nav-item">
              <Link to="/vehicles">Vehicles</Link>
            </li>
            <li className="nav-item">
              <Link to="/planets">Planets</Link>
            </li>
            <li className="nav-item dropdown">here comes dropdown</li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search here..."
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-dark border-3" type="submit">
              <IoMdSearch className="search-icon" />
            </button>
          </form>
        </div>
      </div>
    </nav>

    // {/* <div className='navbar'>
    //     <nav>
    //         <span>
    //             <Link to = "/"> <BiCameraMovie/> Home</Link>
    //         </span>
    //         <span><Link to = "/characters">Char</Link></span>
    //         <span><Link to = "/vehicles">Vehicle</Link></span>
    //         <span><Link to = "/planets">Planet</Link></span>
    //         <form>
    //             <input type="text" placeholder='Search here...' />
    //             <button type='submit' ><IoMdSearch/></button>
    //         </form>
    //     </nav>
    // </div> */}
  );
};

export default Navbar;
