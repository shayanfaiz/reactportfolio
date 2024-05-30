import React from "react";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import logo from "../assets/kevinRushProfile1.png";

const Navbar = () => {
  return (
    <div>
      <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center max-width-23%">
        <img src={logo} style={{ maxWidth: '22%', height: 'auto' ,marginLeft:'8%'}} alt="logo" />

        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
            <FaTwitterSquare/>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
