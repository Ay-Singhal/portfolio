import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import images from '../constants/images';

function ResearchWork() {
  const researchwork = [
    {
      id: 1,
      src: images.journal,
      paperLink: "https://www.sciencedirect.com/science/article/pii/S2772662224000158",
    },
    {
      id: 2,
      src: images.conference,
      paperLink: "",
    },
  ];

  const handleViewPaperClick = (id, paperLink) => {
    if (!paperLink || paperLink.length === 0) {
      toast.info("Paper is accepted but no link provided");
    } else {
      window.open(paperLink, "_blank", "noopener,noreferrer");
    }
  };
 

  return (
    <div name="research work" className='bg-gradient-to-b from-gray-800 via-black to-black w-full text-white md:h-screen' style={{ paddingTop: '140px' }}>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Research Work</p>
          <p className='py-6'>Check out my research work right here.</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0'>
          {researchwork.map(({ id, src, paperLink }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg flex flex-col justify-center items-center'>
              <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
              <div className='flex flex-col items-center justify-center'>
                <button 
                  onClick={() => handleViewPaperClick(id, paperLink)} 
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                >
                  View Paper
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ResearchWork;
