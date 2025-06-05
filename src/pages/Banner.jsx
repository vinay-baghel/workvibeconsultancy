import React from 'react';
import Counter from './Counter';

const Banner = () => {
  return (
    <div className="bg-[#14213d] text-white flex flex-wrap justify-center items-center gap-10 sm:gap-20 md:gap-32 lg:gap-48 py-10 px-4">
      <div className="text-center">
        <Counter target={50} />
        <p>Clients</p>
      </div>
      <div className="text-center">
        <Counter target={10000} />
        <p>Candidates</p>
      </div>
      <div className="text-center">
        <Counter target={9} />
        <p>Countries Served</p>
      </div>
      <div className="text-center">
        <Counter target={200000} />
        <p>Resume Database</p>
      </div>
    </div>
  );
};

export default Banner;
