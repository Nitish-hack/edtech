import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Categories = ({ icon, content, title }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  
  return (
    <div
      className=" flex items-center flex-col gap-4 bg-white px-4 py-6 rounded-md "
      data-aos="fade-up"
    >
      <div className="text-4xl text-Teal">{icon}</div>
      <h2 className="font-bold text-center ">{title}</h2>
      <div className="text-center text-sm">{content}</div>
      
    </div>
  );
};

export default Categories;

