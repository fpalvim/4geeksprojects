import React from 'react'
import { Link } from 'react-router-dom'
import { BiCameraMovie } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <span>
                <Link to = "/"> <BiCameraMovie/> Home</Link>
            </span>
            <span>
                <Link to = "/characters/1">Char n.1</Link>
                <Link to = "/vehicles/2">Vehicle n.2</Link>
                <Link to = "/planets/3">Planet n.3</Link>
            </span>
            <form>
                <input type="text" placeholder='Search here...' />
                <button type='submit' ><IoMdSearch/></button>
            </form>
        </nav>
    </div>
  )
}

export default Navbar