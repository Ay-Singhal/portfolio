import React from 'react';

function About() {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center'>
      <div className='max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
        </div>
        <p className='text-lg sm:text-xl mt-10'>
          I'm currently pursuing my B-Tech in Computer Science from C.V. Raman Global University with a CGPA of 9.19. My journey in tech started with curiosity about how things work, leading me to explore various programming languages and technologies. Over the years, I've honed my skills in frontend development, particularly with React and Tailwind CSS, to create seamless and aesthetically pleasing web applications.
        </p>
        <br />
        <p className='text-lg sm:text-xl'>
          I also have a strong interest in machine learning, which has deepened my understanding of algorithms and the importance of interdisciplinary approaches in solving real-world problems.
        </p>
        <br />
        <p className='text-lg sm:text-xl'>
          Currently, I am working as an Associate Software Engineer Intern at Incture Technologies, enhancing frontend functionalities and UI through team collaboration. My previous experience includes a summer internship at ONGC, where I developed a website to automate login processes and implement a multi-tiered user approval system.
        </p>
        <br />
        <p className='text-lg sm:text-xl'>
          In my free time, I enjoy solving coding challenges on platforms like LeetCode and CodeChef, where I've solved over 550+ problems and have a 3 star rating. My dedication to continuous learning and improvement is reflected in my achievements, including winning a Technical Project Hackathon and earning a spot in the prestigious KAVACH-2023 national-level hackathon.
        </p>
      </div>
    </div>
  );
}

export default About;
