import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';
const Contact = () => {
  const [state, handleSubmit] = useForm("xgegayrg");
  if (state.succeeded) {
      return <div className="max-w-[600px] mx-auto bg-slate-300 text-xl font-bold tracking-wide mb-6 flex items-center justify-center rounded-lg" style={{height:"150px"}}>Your Message is submitted!</div>;
  }
  return (
    <div className=" smallsection  mb-28"  id="contact">
      <div className="text-center max-w-[600px] mx-auto">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Get in Touch
        </div>
        <p className="text-sm leading-7 text-gray">
        We value your feedback and are here to assist you on your learning journey. Let's build a brighter future together!
        </p>
        <motion.form
        onSubmit={handleSubmit}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-5 flex flex-col gap-3"
        >
          <input
          id="name"
            type="text"
            name="name"
            placeholder="Enter your name "
            className="sm:p-3 p-2 w-full outline-none text-sm shadow-md rounded-lg"
          />
          <input
            type="email"
            id="email"
           name="email"
            placeholder="Enter your email address"
            className="sm:p-3 p-2 outline-none text-sm shadow-md w-full rounded-lg"
          />
          <textarea
            placeholder="Enter your message"
            id="message"
        name="message"
            className="sm:p-3 p-2 outline-none text-sm shadow-md w-full rounded-lg"
          />
          <button className="text-sm text-white bg-Teal sm:p-3 p-2 shadow-md font-bold" type="submit" disabled={state.submitting}>
            Submit
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
