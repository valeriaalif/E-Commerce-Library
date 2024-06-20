import React from 'react';

const CTA = () => {
  return (
    <div className='w-full bg-white py-8 px-2'>
      <div className='max-w-[960px] mx-auto grid md:grid-cols-2 gap-4'>
        <img className='w-[250px] my-2 ml-4' src='/assets/reading.png' alt='/' />
        <div className='flex flex-col justify-center mr-0 md:mr-6'>
          <p className='text-[#00df9a] font-bold text-sm'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-1'>Manage Data Analytics Centrally</h1>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black text-[#00df9a] w-[150px] rounded-md font-medium my-4 mx-auto md:mx-0 py-2'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
