import React, { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Internship = ({ image, category, duration, role }) => {
  return (
    <div className="p-2 mb-2 shadow-lg  w-[24%] max-md:w-[32%] max-sm:w-[49%] max-xs:w-[60%] animate bg-white rounded-md "
    data-aos="fade-up">
      <img src={image} alt="" />
      <div className="mt-2 text-xs text-Teal">{category}</div>
      <div className="text-sm mt-2 font-bold">{role}</div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <div className="bg-Solitude p-1 rounded-full">
            <FaCalendarAlt className="text-Teal" />
          </div>
          <div className="text-sm font-bold">{duration}w</div>
        </div>
       
       <a className="px-2 py-1 text-sm rounded-xl bg-teal-400 text-white cursor-pointer" target="to_blank" href="https://forms.gle/nBHJJ7R8S2tuDBLL7">Apply</a>
      </div>
    </div>
  );
};

export default Internship;
