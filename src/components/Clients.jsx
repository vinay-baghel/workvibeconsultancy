import React from 'react';
import hcl from '../assets/hcl.svg';
import fortis from '../assets/fortis.png';
import rkdf from '../assets/rkdf.png';
import kpmg from '../assets/kpmg.svg';
import surya from '../assets/surya.png';
import guarantee from '../assets/guarantee.png';
import guaranteed from '../assets/guaranteed.png';
import customer from '../assets/customer.png';
import customers from '../assets/customers.png';
import review from '../assets/review.png';
import { Typewriter } from 'react-simple-typewriter';

const Clients = () => {
  return (
    <div>
      {/* --------- Our Clients --------- */}
      <div className='flex flex-col justify-center items-center mt-28 px-4'>
        <div className='flex justify-center flex-col items-center'>
          <h1 className='bg-head text-3xl'>Our Clients</h1>
          <div className='w-48 h-1 bg-black'></div>
        </div>

        <div className='bg-client w-full max-w-7xl mt-10 rounded p-4 sm:p-6 md:p-8'>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center items-center'>
            <a href="https://www.hcltech.com">
              <img className='h-20 sm:h-24 object-contain' src={hcl} alt="HCL" data-aos="fade-up" />
            </a>
            <a href="https://www.fortishealthcare.com">
              <img className='h-10 sm:h-12 object-contain' src={fortis} alt="Fortis" data-aos="fade-up" />
            </a>
            <a href="https://erplive.rkdf.ac.in">
              <img className='h-20 sm:h-24 object-contain' src={rkdf} alt="RKDF" data-aos="fade-up" />
            </a>
            <a href="https://www.surya.co.in">
              <img className='h-8 sm:h-10 object-contain' src={surya} alt="Surya" data-aos="fade-up" />
            </a>
            <a href="https://kpmg.com">
              <img className='h-10 sm:h-12 object-contain' src={kpmg} alt="KPMG" data-aos="fade-up" />
            </a>
          </div>
        </div>

       
        <div className="w-full max-w-5xl mt-12 px-4">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[250px] sm:h-[400px] md:h-[500px] rounded"
          >
            <source src="/clients.mp4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

     
      <div className='flex justify-center mt-10 px-4'>
        <div className='bg-blue-50 w-full max-w-7xl rounded py-6 px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6'>
          {[
            { img: guarantee, text: '2000+ Canditates.', color: 'text-green-700' },
            { img: review, text: 'Most Trusted.', color: 'text-amber-800' },
            { img: customer, text: 'Genuine Service.', color: 'text-blue-600' },
            { img: customers, text: '100% Secure.', color: 'text-yellow-500' },
            { img: guaranteed, text: 'Easily Contact.', color: 'text-orange-700' },
            { img: guaranteed, text: 'Easily Contact.', color: 'text-orange-700' },





          ].map((item, idx) => (
            <div key={idx} className='flex flex-col items-center' data-aos="fade-up">
              <img className="w-12 h-12 sm:w-16 sm:h-16 object-contain" src={item.img} alt="" />
              <span className={`font-semibold mt-2 text-center ${item.color}`}>
                <Typewriter
                  words={[item.text]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={800}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
