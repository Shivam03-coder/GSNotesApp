import React from "react";
import DeveloperImage from "../assets/DeveloperImg.png";
import { Link } from "react-router-dom";
import Drawers from "./Drawer";
function Header() {
  return (
    <div className="Navbar sticky top-0 w-full h-[80px] flex justify-between flex-grow items-center px-7  ">
      <div className="Logo">
        <Link to={"/"}>
          <h1 id="GsLogo" className="text-5xl max-md:text-4xl font-semibold text-[cyan] ">GS NOTES</h1>
        </Link>
      </div>
      <div className="Developer  max-lg:hidden  flex justify-between  items-center space-x-16 ">
        <Link to={"/"}>
          <h1 id="Link" className="text-2xl font-semibold text-[cyan] ">HOME</h1>
        </Link>
        <Link to={"/aboutPage"}>
          <h1 id="Link" className="text-2xl font-semibold text-[cyan] ">ABOUT</h1>
        </Link>
        <Link to={"/contactPage"}>
          <h1 id="Link" className="text-2xl font-semibold text-[cyan] ">CONTACT US</h1>
        </Link>
        <a
          href="https://devshivam03.netlify.app/"
          className="href flex justify-center items-center "
        >
          <img
            src={DeveloperImage}
            className=" DeveloperImage w-[74px] rounded-[50%] hover:filter 
            transition-all duration-500
            grayscale-[17] hover:grayscale-[0]"
          />
        </a>
       
      </div>
      <Drawers/>
    </div>
  );
}

export default Header;
