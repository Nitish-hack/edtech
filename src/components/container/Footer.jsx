import React from "react";
import { MdMail ,MdAddLocation } from "react-icons/md";

const Footer = () => {
  return (
    <div
     
      className="bg-Teal p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
        <img src="/nexuslearnlogo.png"  style={{height:"40px",width:"180px"}} alt="logo" />
          <p className="text-sm leading-7 mt-2">
          Empowering Future Tech Leaders: Gain Hands-On Experience Across Diverse Fields with Our Internships.
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Internships</div>
          <div className="flex flex-col gap-4">
           <p className="text-sm">apply in our internships for hands on practical experience!</p>
            <a target="to_blank" href="https://forms.gle/BbB9BFAzVK3pVCzW6" className="text-sm hover:underline tracking-wide bg-orange-200 self-start px-2 py-1 rounded-lg font-semibold text-red-500">
              apply!
            </a>
           
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Courses</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Web Development
            </a>
            <a href="" className="text-sm hover:underline">
              Android Development
            </a>
            <a href="" className="text-sm hover:underline">
              {" "}
              Data Science
            </a>
            <a href="" className="text-sm hover:underline">
              Data Structures and Algorithm
            </a>
          </div>
        </div>
       
        <div>
          <div className="font-bold mb-6">Contact Us</div>
          <div className="text-sm mb-4 flex items-center gap-1"><MdMail className="text-xl" />team.nexuslearn@gmail.com</div>
          <div className="text-sm mb-4 flex items-center gap-1"><MdAddLocation className="text-xl" />New Delhi, India</div>
         
        
        </div>
      </div>
      <p className="text-sm text-center mt-6 text-slate-300 tracking-wider font-semibold">Copyright © 2024 NexusLearn. All rights reserved.</p>
    </div> 
  );
};

export default Footer;
