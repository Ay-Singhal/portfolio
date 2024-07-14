import React, { useState } from 'react';

function Experience() {
  const [activeSection, setActiveSection] = useState('experience');

  const contentContainerClass = 'max-w-screen-lg mx-auto text-center';

  const experienceContent = (
    <div className={contentContainerClass}>
      <ul className='py-4'>
        <li className="mb-8">
          <h3 className="text-xl font-bold mb-2">Associate Software Engineer Intern (Frontend Developer)</h3>
          <p className="text-gray-300">Incture Technologies | February 2024 - ongoing</p>
          <ul className="list-disc pl-8 text-left inline-block">
            <li>Developed ReactJS front-end for resource management app in a 20+ member team.</li>
            <li>Managed 1500+ employee profiles and allocation for 50+ projects.</li>
            <li>Enhanced profile management with Material UI (+30% accuracy) and collaborated with UX/backend teams (-25%
              turnaround time).</li>
            <li>Technologies used: ReactJs, Redux, Tailwind Css, MUI.</li>  
          </ul>
        </li>
        <li className="mb-8">
          <h3 className="text-xl font-bold mb-2">Summer Training Internship</h3>
          <p className="text-gray-300">ONGC, Dehradun | July 2023 - August 2023</p>
          <ul className="list-disc pl-8 text-left inline-block">
            <li>Developed a Multi-tiered user approval system, ensuring that user accounts could only be created by 3 levels of
            approval by Site Managers, Regional Managers and the Head Epinet.</li>
            <li>Utilized React Hook Form and YUP for efficient form development, ensuring seamless validation and error 
            handling.</li>
            <li>
            Implemented robust communication with backend APIs, ensuring smooth data exchange and interaction with the 
            server.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );

  const educationContent = (
    <div className={contentContainerClass}>
      <ul className='py-4'>
        <li className="mb-8">
          <h3 className="text-xl font-bold mb-2">B-Tech in Computer Science</h3>
          <p className="text-gray-300">C.V. Raman Global University, Bhubaneswar | 2020-2024</p>
          <ul className="list-disc pl-8 text-left inline-block">
            <li>CGPA: 9.27</li>
          </ul>
        </li>
        <li className="mb-8">
          <h3 className="text-xl font-bold mb-2">Intermediate</h3>
          <p className="text-gray-300">Park Mount Public School, Patna | 2017-2019</p>
          <ul className="list-disc pl-8 text-left inline-block">
            <li>Percentage: 81.80%</li>
          </ul>
        </li>
        <li className="mb-8">
          <h3 className="text-xl font-bold mb-2">Matriculation</h3>
          <p className="text-gray-300">ST. Karen's High School, Patna | 2015-2017</p>
          <ul className="list-disc pl-8 text-left inline-block">
            <li>CGPA: 10</li>
          </ul>
        </li>
      </ul>
    </div>
  );

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div name='experience' className='bg-gradient-to-b from-black via-black to-gray-800 w-full text-white md:h-screen' style={{ paddingTop: '140px' }}>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <p className='text-4xl font-bold inline'>
          <span className='border-b-4 border-gray-500'>Experience</span>
        </p>
        <div className='flex justify-center space-x-4 my-4'>
          <button
            onClick={() => handleSectionChange('experience')}
            className={`px-4 py-2 ${activeSection === 'experience' ? 'bg-white text-black' : 'bg-gray-800 text-white'} rounded`}
          >
            Experience
          </button>
          <button
            onClick={() => handleSectionChange('education')}
            className={`px-4 py-2 ${activeSection === 'education' ? 'bg-white text-black' : 'bg-gray-800 text-white'} rounded`}
          >
            Education
          </button>
        </div>
        {activeSection === 'experience' ? experienceContent : educationContent}
      </div>
    </div>
  );
}

export default Experience;
