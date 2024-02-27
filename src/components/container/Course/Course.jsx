import React, { useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const Course = ({ image, category, title, participants,  }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); 
  }, []);
  
  return (
    <div className="p-2 mb-2 shadow-lg  w-[24%] max-md:w-[32%] max-sm:w-[49%] max-xs:w-[60%] animate bg-white rounded-md "
    data-aos="fade-up">
      <img src={image}  alt="" />
      <div className="mt-2 text-xs text-Teal">{category}</div>
      <div className="text-sm mt-2 font-bold">{title}</div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <div className="bg-Solitude p-1 rounded-full">
            <AiOutlineUser className="text-Teal" />
          </div>
          <div className="text-sm font-bold">{participants}+</div>
        </div>
       
       <a className="px-2 py-1 text-sm rounded-xl bg-teal-400 text-white cursor-pointer" target="to_blank" href="https://forms.gle/uwqxkfXt1CUnPaXb8">Enroll!</a>
      </div>
    </div>
  );
};

export default Course;
