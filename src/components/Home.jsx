import React from 'react';
import images from '../constants/images';
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className='w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-screen px-4' style={{ paddingTop: '5%' }}> 
        <div className='flex flex-col justify-center text-center md:text-left md:w-1/2'>
          <h2 className="text-4xl sm:text-7xl text-white mb-4">
            <span className="font-bold block text-sm md:text-base mb-3">👋 Hey there</span>
            <span className="font-bold block text-xl md:text-4xl mb-3">I'm Ayush Singhal</span>
            <span className="font-bold block md:text-2xl">Frontend Developer</span>
          </h2>
          <p className="text-gray-300 max-w-screen-lg mx-auto mb-4 md:text-xl">
            I'm passionate creator interested in crafting seamless user experiences. With expertise in React, JavaScript, and CSS, I specialize in bringing websites to life with intuitive interfaces. Let's connect on platforms like Leetcode and Codechef to explore my passion for problem-solving and expertise in languages like C++, JavaScript, and Python.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <BsArrowRightCircle size={25} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
        <img src={images.profile} alt="Profile" className='rounded-2xl mx-auto w-2/3 md:w-1/2 mb-8 md:mb-0' />
      </div>
    </div>
  )
}

export default Home;
