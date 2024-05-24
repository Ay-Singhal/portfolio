import React from 'react';
import book from '../assets/portfolio/book.png';
import traffic from '../assets/portfolio/traffic.jpg';

function Project() {
  const portfolio = [
    {
      id: 1,
      src: book,
      demoLink: "https://book-store-ie11geo41-ayush-singhals-projects-b3c7cef0.vercel.app/",
      codeLink: "https://github.com/Ay-Singhal/Book_store",
    },
    {
      id: 2,
      src: traffic,
      demoLink: "",
      codeLink: "https://github.com/Ay-Singhal/Automatic-Number-Plate-Detection",
    },
  ];

  return (
    <div name="project" className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen' style={{ paddingTop: '140px' }}>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          <p className='py-6'>Check out some of my work right here.</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolio.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
              <div className='flex items-center justify-center'>
                {demoLink ? (
                  <>
                    <a href={demoLink} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                    <a href={codeLink} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                  </>
                ) : (
                  <a href={codeLink} target="_blank" rel="noopener noreferrer" className='w-full px-6 py-3 m-4 duration-200 hover:scale-105 text-center'>Code</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
