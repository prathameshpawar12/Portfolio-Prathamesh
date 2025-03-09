import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_nux5gxa",
        "template_hwr1l0f",
        formData,
        "a0ClkToXFscDZU3rs"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", description: "" });
        },
        (err) => {
          console.log("FAILED...", err);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div id="contact" className="flex h-[100vh] md:h-[100vh] w-[94vw] md:w-[99vw] items-center justify-center text-black ">
      <div id="con" className="md:w-[97.5vw] w-[92.4vw] h-[96vh] md:h-[96.2vh] flex flex-col items-center justify-center   rounded-[45px]  p-6 bg-gray-900">
        
        <motion.h1 
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }} 
          className="text-center text-5xl font-[gs] md:text-[4vw] text-white md:mb-20 md:-mt-7 mb-30"
        >
          Get in Touch
        </motion.h1>

        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }} 
          className="text-center md:text-lg text-sm font-semibold  text-white/65 font-[nf] mb-4 md:mb-2"
        >
          Hire me!! Send me an email through this form.
        </motion.p>

        <motion.form
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }} 
          onSubmit={handleSubmit} 
          className="h-[50vh] md:w-[40vw] w-[80vw] md:h-[25vw] md:mb-0 mb-20 flex flex-col justify-center items-center gap-4 text-white
         bg-black/50 p-10 rounded-4xl border-1 shadow-lg shadow-white/40">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="md:w-[25vw] p-1 border-b-2  outline-0 "
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="md:w-[25vw] p-1 border-b-2  outline-0"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="md:w-[25vw] p-1 border-b-2  outline-0"
          />
          <textarea
            name="description"
            placeholder="Your Message"
            value={formData.description}
            onChange={handleChange}
            className="md:w-[25vw] p-2 border-b-2  outline-0"
            required
          ></textarea>

          <button
            type="submit" className="ring-4 md:w-[10vw] w-[22vw] h-[10] md:h-[5vh] rounded-3xl md:mt-6 mt-10 font-[nf] hover:bg-gray-600 hover:shadow-2xl transition-all duration-300"
          >
            SUBMIT
          </button>
        </motion.form>

        {status && <p className="mt-2 text-center text-green-400">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;