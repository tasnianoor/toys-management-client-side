
// import React from 'react';



// const Popular = () => {
//     return (

//         <div  className='my-5 px-5 flex flex-col justify-center'>
//             <p className='font-bold text-3xl text-center my-5'>Our Popular Toys</p>
//           <div className='grid md:grid-cols-3 grid-cols-1 gap-4  w-50'>
//                 <div className="card glass shadow-3xl w-50">
//                     <figure><img className='w-40 h-40' src="https://i.ibb.co/HDzM81s/c4.jpg" alt="BoxSet-1" /></figure>
//                     <div className="card-body w-50 h-50">
//                         <h2 className="card-title">Frozen Princess:Anna</h2>
//                         <p className='font-semibold'>Price:$40 </p>
//                         <div className="card-actions justify-end">
//                             <button className="btn btn-pink-900 text-white">Order Now!!!</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="card glass shadow-3xl">
//                     <figure><img className='w-40 h-40' src="https://i.ibb.co/M2mFB0N/c1.jpg" alt="BoxSet-2" /></figure>
//                     <div className="card-body w-50 h-50">
//                         <h2 className="card-title">Disney Princess:Ariel</h2>
//                         <p className='font-semibold'>Price:$36 </p>
//                         <div className="card-actions justify-end">
//                             <button className="btn btn-pink-900 text-white">Order Now!!!</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="card glass shadow-3xl">
//                     <figure><img className='w-40 h-40' src="https://i.ibb.co/WDJHth1/c8.jpg"alt="BoxSet-3" /></figure>
//                     <div className="card-body w-50 h-50">
//                         <h2 className="card-title">Duck:Daisy Duck</h2>
//                         <p className='font-semibold'>Price:$699 </p>
//                         <div className="card-actions justify-end">
//                             <button className="btn btn-pink-900 text-white">Order Now!!!</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>


//     );
// };

// export default Popular;
import { useState } from 'react'
// import logo from '../../assets/icon/best.png'
import Marquee from "react-fast-marquee";

const Popular = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  return (
    <div className='mt-12'>
      <div className='my-3 md:my-5 bg-rose-200'>
        <div className='mt-12'>
          <p className='font-bold text-center mb-5  pt-12 text-3xl text-black'>Our Popular Toys</p>
        </div>
        <Marquee
          pauseOnHover
          speed={50}
        >
          <div className='grid grid-cols-5 justify-items-center gap-2 md:gap-8 px-5 mt-10'>
            <div
              className="relative w-72 bg-base-100 shadow-xl image-full group"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <img
                className={`transition-opacity duration-500 ease-in-out object-cover rounded-lg h-full w-full ${isHovered2 ? 'opacity-70' : 'opacity-100'
                  }`}
                src="https://i.ibb.co/ZLLzfYm/cc1.jpg"
               
              />
              {isHovered1 && (
                <div className="rounded-lg absolute inset-0 flex flex-col justify-center text-center items-center p-5 bg-black bg-opacity-80 text-white">
                  <h2 className="card-title">Ariel</h2>
                  <p>Disney Princess</p>
                  <div className="card-actions justify-end my-2">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative w-72 bg-base-100 shadow-xl image-full group"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <img
                className={`transition-opacity duration-500 ease-in-out object-cover rounded-lg h-full w-full ${isHovered2 ? 'opacity-70' : 'opacity-100'
                  }`}
                src="https://i.ibb.co/0jNLZp7/c2.jpg"
               
              />
              {isHovered2 && (
                <div className="rounded-lg absolute inset-0 flex flex-col justify-center text-center items-center p-5 bg-black bg-opacity-80 text-white">
                  <h2 className="card-title">Moana</h2>
                  <p>Disney Princess</p>
                  <div className="card-actions justify-end my-2">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative w-72 bg-base-100 shadow-xl image-full group"
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              <img
                className={`transition-opacity duration-500 ease-in-out rounded-lg h-full w-full object-cover ${isHovered3 ? 'opacity-70' : 'opacity-100'
                  }`}
                src="https://i.ibb.co/mcbcwjp/cc3.jpg"
                
              />
              {isHovered3 && (
                <div className="rounded-lg absolute inset-0 flex flex-col justify-center text-center items-center p-5 bg-black bg-opacity-80 text-white">
                  <h2 className="card-title">Anna</h2>
                  <p>Frozen Princess</p>
                  <div className="card-actions justify-end my-2">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative w-72 bg-base-100 shadow-xl image-full group"
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
            >
              <img
                className={`transition-opacity duration-500 ease-in-out rounded-lg h-full w-full ${isHovered4 ? 'opacity-70' : 'opacity-100'
                  }`}
                src="https://i.ibb.co/WDJHth1/c8.jpg"
              />
              {isHovered4 && (
                <div className="rounded-lg absolute inset-0 flex flex-col justify-center text-center items-center p-5 bg-black bg-opacity-80 text-white">
                  <h2 className="card-title">DaisyDuck</h2>
                  <p>Disney Duck</p>
                  <div className="card-actions justify-end my-2">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative w-72 bg-base-100 shadow-xl image-full group"
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
            >
              <img
                className={`transition-opacity duration-500 ease-in-out rounded-lg h-full w-full ${isHovered4 ? 'opacity-70' : 'opacity-100'
                  }`}
                src="https://i.ibb.co/MR24k8K/c3.jpg"
              />
              {isHovered4 && (
                <div className="rounded-lg absolute inset-0 flex flex-col justify-center text-center items-center p-5 bg-black bg-opacity-80 text-white">
                  <h2 className="card-title">Rapunzel</h2>
                  <p>Disney Princess</p>
                  <div className="card-actions justify-end my-2">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              )}
            </div>
           
          </div>
        </Marquee>
      </div>

    </div>
  );
};

export default Popular;


