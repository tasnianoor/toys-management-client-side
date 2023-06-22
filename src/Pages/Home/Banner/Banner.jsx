import React from 'react';
import image1 from '../../../assets/images/image1.jpg'


const Banner = () => {
    return (
        <div className='w-full relative'>
        <img
        style={{height : '85vh'}}
          className='w-full brightness-65'
          src={image1}
          alt=""
        />
        <div className='absolute inset-0 w-2/3 left-20'>
            <div className=' text-white space-y-8 translate-y-1/2'>
        <p className='text-3xl md:text-5xl font-bold'>Welcome to <br/>Kids Toys store</p>
          <p className='hidden md:block'>A modern baby shop and kids store for all kinds of disney dolls...</p>   
            <button className='btn w-5/6 md:w-1/4 rounded-3xl'>Shop Now</button>
            </div>
        </div>
      </div>
    );
};

export default Banner;
