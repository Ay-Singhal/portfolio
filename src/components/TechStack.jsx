import React from 'react'
import images from '../constants/images';

function TechStack() {
  const techs = [
    {
      id: 1,
      src: images.html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: images.css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: images.tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: images.javascript,
      title: "Javascript",
      style: "shadow-yellow-300",
    },
    {
      id: 4,
      src: images.react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: images.cpp,
      title: "CPP",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: images.python,
      title: "Python",
      style: "shadow-yellow-200",
    },
    
  ];

  return (
    <div
      name="tech stack"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full h-screen md:h-screen" style={{ paddingTop: '200px' }}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Tech Stack
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;