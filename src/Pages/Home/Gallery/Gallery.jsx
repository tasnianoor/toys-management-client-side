// import React from 'react';
// import img1 from  '../../../assets/images/c1.jpg'
// import img2 from  '../../../assets/images/c2.jpg'
// import img3 from  '../../../assets/images/c3.jpg'
// import img4 from  '../../../assets/images/c4.jpg'
// import img5 from  '../../../assets/images/c5.jpg'
// import img6 from  '../../../assets/images/c6.jpg'
// import img7 from  '../../../assets/images/c7.jpg'
// import img8 from  '../../../assets/images/c8.jpg'

// const Gallery = () => {
//     return (
//         <div className='my-4 px-5 card-body'>
//             <p className='font-bold text-3xl text-center my-8'>Dolls Gallery</p>
//          <div className="w-full glass rounded-xl img-fluid">
//             <div className='grid md:grid-cols-4 grid-cols-1 gap-4  '>
//                 <img className='rounded-t-xl w-full h-64 border-2 border-pink-900'  src={img1}  border="2" />
//                 <img className='rounded-t-xl w-full h-64 border-2 border-pink-900'  src={img2} border="2" />
//                 <img className='rounded-t-xl w-full h-64 border-2 border-pink-900' src={img3} border="2" />
//                 <img className='rounded-t-xl w-full h-64 border-2 border-pink-900'  src={img4} border="2" />
//                 <img className='rounded-t-xl w-full h-64 border-2 border-pink-900' src={img5} border="2" />
//                 <img className='rounded-t-xl w-full h-64 border-2 border-pink-900' src={img6} border="2" />
//                 <img className='rounded-t-xl w-full h-64 border-2 border-pink-900' src={img7} border="2" />
//                 <img className='rounded-t-xl w-full h-64 border-2 border-pink-900' src={img8} border="2" />
//             </div>
//             </div>
//         </div>
//     );
// };

// export default Gallery;
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Gallery = () => {
//     const images = [
//         "https://i.ibb.co/MR24k8K/c3.jpg",
//         "https://i.ibb.co/0jNLZp7/c2.jpg",
//         "https://i.ibb.co/dpGt6ZP/c7.jpg",
//         "https://i.ibb.co/WDJHth1/c8.jpg",
//         "https://i.ibb.co/T2LP13G/c9.jpg",
//         'https://img.freepik.com/free-psd/3d-illustration-children-s-toy-rubik-s-cube_23-2149345313.jpg?1&w=740&t=st=1684469707~exp=1684470307~hmac=ea22afeea7360e9e2b0819a2e9f211232a815b1ea785f07c5de2b503dea5f1e5',
//         'https://img.freepik.com/free-psd/infographic-elements-three-dimensional-icon_23-2149740202.jpg?w=740&t=st=1684469821~exp=1684470421~hmac=ae19bdab52454bbabd842fdb82deac1079b334cc00e9985a4f3784cc04c03643',
//         'https://img.freepik.com/free-psd/amusement-park-game-icon_23-2150154382.jpg?w=740&t=st=1684470110~exp=1684470710~hmac=2c86498ce4c56feab8eef27412735def8da94ee02e43da6522bfacfce0b96878',
//         'https://img.freepik.com/free-psd/amusement-park-plane-icon_23-2150154386.jpg?w=740&t=st=1684470035~exp=1684470635~hmac=71b5f43920e1e9e7f6739a57b32b8e5cff4a49b3b8a5b7548e383cd380f02897'
//         // Add more image URLs as needed
//     ];

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         autoplay: true,
//         arrows: true,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     dots: false, // Hide dots on small devices
                    
//                 },
//             },
//         ],
//     };

//     const sliderRef = React.useRef(null);

//     const handlePause = () => {
//         sliderRef.current.slickPause();
//     };

//     const handlePlay = () => {
//         sliderRef.current.slickPlay();
//     };

//     return (
//         <div className="container mx-auto p-4 mt-4 md:mt-6 lg:mt-8">
//             <h2 className='text-center font-semibold text-2xl lg:text-3xl mb-4 lg:mb-7'>ToyGenius Gallery</h2>
//             <Slider ref={sliderRef} {...settings} className="overflow-hidden">
//                 {images.map((image, index) => (
//                     <div key={index} className="px-2">
//                         <img src={image} alt={`Image ${index + 1}`} className="mx-auto rounded-lg" />
//                     </div>
//                 ))}
//             </Slider>

//             <div className="flex justify-center mt-4">
//                 <button
//                     className="bg-gradient-to-r from-orange-300 to-amber-300 text-black font-bold py-2 px-4 rounded mr-2"
//                     onClick={handlePause}
//                 >
//                     Pause
//                 </button>
//                 <button
//                     className="bg-gradient-to-r from-orange-300 to-amber-300 text-black font-bold py-2 px-4 rounded"
//                     onClick={handlePlay}
//                 >
//                     Play
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Gallery;
// import { useState } from 'react'
// // import logo from '../../assets/icon/best.png'
// import Marquee from "react-fast-marquee";

// const Gallery = () => {
//   const [isHovered1, setIsHovered1] = useState(false);
//   const [isHovered2, setIsHovered2] = useState(false);
//   const [isHovered3, setIsHovered3] = useState(false);
//   const [isHovered4, setIsHovered4] = useState(false);

//   return (
//     <div className='mt-20'>
//       <div className='my-3 md:my-5'>
//         <div className='my-5'>
//           <p className='font-bold text-center my-2 text-3xl text-black'>Our Popular Toys</p>
//         </div>
//         <Marquee
//           pauseOnHover
//           speed={50}
//         >
//           <div className='grid grid-cols-5 justify-items-center gap-2 md:gap-8 px-5 mt-10'>
//             <div
//               className="relative w-72 bg-base-100 shadow-xl image-full group"
//               onMouseEnter={() => setIsHovered1(true)}
//               onMouseLeave={() => setIsHovered1(false)}
//             >
//               <img
//                 className={`transition-opacity duration-500 ease-in-out object-cover rounded-lg h-full w-full ${isHovered2 ? 'opacity-70' : 'opacity-100'
//                   }`}
//                 src="https://i.ibb.co/ZLLzfYm/cc1.jpg"
               
//               />
//               {isHovered1 && (
//                 <div className="rounded-lg absolute inset-0 flex flex-col justify-center text-center items-center p-5 bg-black bg-opacity-80 text-white">
//                   <h2 className="card-title">Ariel</h2>
//                   <p>Disney Princess</p>
//                   <div className="card-actions justify-end my-2">
//                     <button className="btn btn-primary">Buy Now</button>
//                   </div>
//                 </div>
//               )}
//             </div>
//             <div
//               className="relative w-72 bg-base-100 shadow-xl image-full group"
//               onMouseEnter={() => setIsHovered2(true)}
//               onMouseLeave={() => setIsHovered2(false)}
//             >
//               <img
//                 className={`transition-opacity duration-500 ease-in-out object-cover rounded-lg h-full w-full ${isHovered2 ? 'opacity-70' : 'opacity-100'
//                   }`}
//                 src="https://i.ibb.co/0jNLZp7/c2.jpg"
               
//               />
//               {isHovered2 && (
//                 <div className="rounded-lg absolute inset-0 flex flex-col justify-center text-center items-center p-5 bg-black bg-opacity-80 text-white">
//                   <h2 className="card-title">Moana</h2>
//                   <p>Disney Princess</p>
//                   <div className="card-actions justify-end my-2">
//                     <button className="btn btn-primary">Buy Now</button>
//                   </div>
//                 </div>
//               )}
//             </div>
//             <div
//               className="relative w-72 bg-base-100 shadow-xl image-full group"
//               onMouseEnter={() => setIsHovered3(true)}
//               onMouseLeave={() => setIsHovered3(false)}
//             >
//               <img
//                 className={`transition-opacity duration-500 ease-in-out rounded-lg h-full w-full object-cover ${isHovered3 ? 'opacity-70' : 'opacity-100'
//                   }`}
//                 src="https://i.ibb.co/mcbcwjp/cc3.jpg"
                
//               />
//               {isHovered3 && (
//                 <div className="rounded-lg absolute inset-0 flex flex-col justify-center text-center items-center p-5 bg-black bg-opacity-80 text-white">
//                   <h2 className="card-title">Anna</h2>
//                   <p>Frozen Princess</p>
//                   <div className="card-actions justify-end my-2">
//                     <button className="btn btn-primary">Buy Now</button>
//                   </div>
//                 </div>
//               )}
//             </div>
//             <div
//               className="relative w-72 bg-base-100 shadow-xl image-full group"
//               onMouseEnter={() => setIsHovered4(true)}
//               onMouseLeave={() => setIsHovered4(false)}
//             >
//               <img
//                 className={`transition-opacity duration-500 ease-in-out rounded-lg h-full w-full ${isHovered4 ? 'opacity-70' : 'opacity-100'
//                   }`}
//                 src="https://i.ibb.co/WDJHth1/c8.jpg"
//               />
//               {isHovered4 && (
//                 <div className="rounded-lg absolute inset-0 flex flex-col justify-center text-center items-center p-5 bg-black bg-opacity-80 text-white">
//                   <h2 className="card-title">DaisyDuck</h2>
//                   <p>Disney Duck</p>
//                   <div className="card-actions justify-end my-2">
//                     <button className="btn btn-primary">Buy Now</button>
//                   </div>
//                 </div>
//               )}
//             </div>
//             <div
//               className="relative w-72 bg-base-100 shadow-xl image-full group"
//               onMouseEnter={() => setIsHovered4(true)}
//               onMouseLeave={() => setIsHovered4(false)}
//             >
//               <img
//                 className={`transition-opacity duration-500 ease-in-out rounded-lg h-full w-full ${isHovered4 ? 'opacity-70' : 'opacity-100'
//                   }`}
//                 src="https://i.ibb.co/MR24k8K/c3.jpg"
//               />
//               {isHovered4 && (
//                 <div className="rounded-lg absolute inset-0 flex flex-col justify-center text-center items-center p-5 bg-black bg-opacity-80 text-white">
//                   <h2 className="card-title">Rapunzel</h2>
//                   <p>Disney Princess</p>
//                   <div className="card-actions justify-end my-2">
//                     <button className="btn btn-primary">Buy Now</button>
//                   </div>
//                 </div>
//               )}
//             </div>
           
//           </div>
//         </Marquee>
//       </div>

//     </div>
//   );
// };


// export default Gallery;

import { useState } from "react";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };
  const images = [
    "https://i.ibb.co/MR24k8K/c3.jpg",
    "https://i.ibb.co/0jNLZp7/c2.jpg",
    "https://i.ibb.co/ZLLzfYm/cc1.jpg",
    "https://i.ibb.co/mcbcwjp/cc3.jpg",
    "https://i.ibb.co/WDJHth1/c8.jpg",
    "https://i.ibb.co/Tq4TFJh/g1.jpg",
  ];
  return (
    <div className="bg-rose-200 py-5 sm:py-12 px-5 sm:px-10 sm:mt-12">
      <p className="text-2xl sm:text-3xl font-bold mb-5 text-center">
        Our Toys Gallery
      </p>
      <div className="grid sm:grid-cols-8 gap-2">
        <div className="sm:col-span-3">
          <div
            className={`w-full h-96 sm:h-full bg-cover bg-center bg-[url('https://i.ibb.co/GtbWD2F/bg1.jpg')] relative inline-block transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-75"
            }`}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <div
              className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white justify-center items-center flex ${
                isHovered ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300`}
            >
              <div className="text-center">
                <button className="py-2 px-3 border text-2xl font-semibold">
                  Buy Now
                </button>
                <p className="text-lg mt-3">
                Disney have confirmed that their beloved Buzz is the Disney Store's best-selling toy of all time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {images.map((img, index) => (
            <GalleryCard key={index} image={img}></GalleryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;




