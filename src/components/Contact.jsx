import React from "react";
import images from '../constants/images';

function Contact() {
  return (
    <div
      name="contact"
      className="w-full min-h-screen  bg-gradient-to-b from-black via-black to-gray-800 p-4 text-white flex items-center"
      style={{ paddingTop: '100px' }}
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Let's Connect
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 flex justify-start items-center mb-8 md:mb-0">
            <img src={images.contact} alt="Contact Image 1" className="w-full h-auto rounded-md shadow-lg max-w-sm md:max-w-md" />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start">
            <p className="font-bold text-3xl">Get in Touch</p>
            <p className="py-6">Always open to messages! Whether it's a question or a friendly hello, I'll strive to get back to you quickly.</p>
            <form
              action="https://getform.io/f/nbdoqvka"
              method="POST"
              className="flex flex-col w-full space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name*"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email*"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full"
                required
              />
              <textarea
                name="message"
                placeholder="Enter your message*"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full"
                required
              ></textarea>
    
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Let's have Chai!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
