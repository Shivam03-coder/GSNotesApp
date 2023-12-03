import React from "react";
import PhySem from "../assets/PhySem.png";
import ChemSem from "../assets/ChemSem.png";
import Layout from "./Layout";
import { Link } from "react-router-dom";

function MainSection() {
  return (
    <Layout>
      <div className="SemChoice min-h-[80vh] pt-[60px] pb-[100px] grid grid-cols-2 max-sm:grid-cols-1 max-sm:mx-auto mx-auto w-4/5 max-sm:space-y-6  justify-center gap-11 items-center">
        <div className="PhySem flex flex-col justify-center items-center ">
          <Link>
            <img className="PhySemImg w-[500px] h-{500] " src={PhySem} alt="" />
          </Link>
          <a
            href="https://drive.google.com/file/d/1JWtPUcPpvCujB1Nbgq992SicQ-hbiK9A/view?usp=sharing"
            className="href text-sm mt-9 "
          >
            <button className="button-33" role="button">
              <span className="text text-black font-semibold text-[26px] max-sm:text-[18px]">
                DOWNLOAD SYLLABUS A <i class="bi bi-cloud-arrow-down-fill"></i>
              </span>
            </button>
          </a>
          <Link to={"/physempage"} className="href text-sm mt-9 ">
            <button className="button-33" role="button">
              <span className="text text-black font-semibold text-[26px] max-sm:text-[18px] ">
                NOTES PYQS & BOOKS <i class="bi bi-cloud-arrow-down-fill"></i>
              </span>
            </button>
          </Link>
        </div>
        <div className="ChemSem flex flex-col justify-center items-center ">
          <Link>
            <img
              className="ChemSemImg w-[500px] h-{500]"
              src={ChemSem}
              alt=""
            ></img>
          </Link>
          <a
            href="https://drive.google.com/file/d/1dC46-sF6kV8o4hgqygnF8GcDG8ZXS9rN/view?usp=sharing"
            className="href text-sm mt-9 "
          >
            <button className="button-33" role="button">
              <span className="text text-black font-semibold text-[26px] max-sm:text-[18px]">
                DOWNLOAD SYLLABUS B <i class="bi bi-cloud-arrow-down-fill"></i>
              </span>
            </button>
          </a>
          <Link to={"/chemsempage"} className="href text-sm mt-9 ">
            <button className="button-33" role="button">
              <span className="text text-black font-semibold text-[26px] max-sm:text-[18px] ">
                NOTES PYQS & BOOKS <i class="bi bi-cloud-arrow-down-fill"></i>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default MainSection;
