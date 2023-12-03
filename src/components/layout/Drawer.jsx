import { Divider, Drawer, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import DeveloperImage from "../assets/DeveloperImg.png";

function Drawers() {
  const [IsDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <div className="lg:hidden ">
      <Drawer
        anchor="left"
        open={IsDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        role="presentation"
      >
        <div
          id="DrawerBar"
          className="w-72 flex flex-col text-2xl 
         bg-[#161A30] h-full text-[cyan]  space-y-16 text-center pt-11"
        >
          <Typography variant="h3" component={"div"} id="H3NavBAr">
          GS NOTES
          </Typography>
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
            className=" DeveloperImage w-[74px] rounded-[50%] filter grayscale-180"
          />
        </a>
       
        </div>
      </Drawer>
      <button className="shadow-none" >
        <i
          class="bi text-[40px] text-[cyan] bi-list"
          onClick={() => setIsDrawerOpen(true)}
        ></i>
      </button>
    </div>
  );
}

export default Drawers;
