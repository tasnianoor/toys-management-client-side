// import React, { useState } from 'react';
// // import { toast } from 'react-toastify';



// const TabSection = () => {
//   const [activeTab, setActiveTab] = useState(0);

  

//   const tabs = [
//     {
//       category: 'Disney',
//       products: [
//         { name: 'Ariel', price: '$49', ratings: 4.3 ,image: 'https://i.ibb.co/M2mFB0N/c1.jpg' },
//         { name: 'Moana', price: '$99',ratings: 4.2 , image: 'https://i.ibb.co/0jNLZp7/c2.jpg' },
//         { name: 'Rapunzel', price: '$33',ratings: 4.4 , image: 'https://i.ibb.co/MR24k8K/c3.jpg' },
//       ],
//     },
//     {
//       category: 'Frozen',
//       products: [
//         { name: 'Anna', price: '$29',ratings: 4.1 , image: 'https://i.ibb.co/HDzM81s/c4.jpg' },
//         { name: 'Elsa', price: '$79', ratings: 4.3 ,image: 'https://i.ibb.co/g3zgr0Z/c5.jpg' },
//         { name: 'Mattias', price: '$12', ratings: 4.2 ,image: 'https://i.ibb.co/80vJzKM/c6.jpg' },
//       ],
//     },

//     {
//         category: 'Duck',
//         products: [
//           { name: 'Donald Duck', price: '$29', ratings: 4.5 ,image: 'https://i.ibb.co/dpGt6ZP/c7.jpg'},
//           { name: 'Daisy Duck', price: '$79',ratings: 4.2,  image: 'https://i.ibb.co/WDJHth1/c8.jpg' },
//           { name: 'Louie', price: '$19',ratings: 4.1 , image: 'https://i.ibb.co/T2LP13G/c9.jpg' },
//         ],
//       },
//   ];

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//   };

//   const handleToast = () =>{
//     if(!user){
//         toast('Without login you can not visit this page. Please Login')
//     }
// }

//   return (
//     <div>
//          <p className='font-bold text-3xl text-center my-5'>Search By Category</p>
//          <div className="tabs d-flex justify-center  align-items-center">
//       <div className="tabs items-center tab-md tabs-boxed bg-pink-300 text-red">
//         {tabs.map((tab, index) => (
//           <div
//             key={index}
//             className={`tab ${index === activeTab ? 'active' : ''}`}
//             onClick={() => handleTabClick(index)}
//           >
//             {tab.category}
//           </div>
//         ))}
//       </div>
//       </div>
    
    
//        <div  className='my-5 px-5 flex flex-col justify-center'>
       
//        <div className="card full shadow-3xl w-50 h-50">
//        <div className='grid md:grid-cols-3 grid-cols-1 gap-4  w-50 '>
//         {tabs[activeTab].products.map((product, index) => (
//           <div key={index} className="card">
//             <img className='w-70 h-40' src={product.image} alt={product.name} />
//             <div className="card-body w-50 h-50">
//               <h2>Name:{product.name}</h2>
//               <h3>Price:{product.price}</h3>
//               <h3>Ratings:{product.ratings}</h3>
             
//             <button onClick={handleToast} className="btn btn-primary">View Details</button>
//              </div>
//           </div>
//          ))}
//          </div>
//          </div>

//       </div>
//     </div>
//   );
// };


// export default TabSection;

// import React from 'react';

// /* eslint-disable no-unused-vars */
// /* eslint-disable react/jsx-key */
// import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// // import { Rating } from '@smastrom/react-rating'
// // import '@smastrom/react-rating/style.css'

// import { toast } from "react-hot-toast";
// import { AuthContext } from "../../../Provider/AuthProvider";

// const Categories = () => {

//     const {user } = useContext(AuthContext);
//     const [toys, setToys] = useState([]);
//     const [activeToy, setActiveToy] = useState('Frozen');

//     useEffect(() => {
//         fetch(`https://disney-world-server.vercel.app/allToys/${activeToy}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 setToys(data);
//                 console.log(data);
//             });
//     }, [activeToy]);

//     const handleTabClick = (tabName) => {
//         setActiveToy(tabName);
//     };

//     const handleViewDetails = () => {
//         if (!user) {
//             toast.error('You have to log in first to view details');
//         } else {
//             // Perform the action to view details
//         }
//     };


//     return (
//         <div className="mb-10 mt-7 md:mt-8 lg:mt-12">
//             <h3 className="text-center font-semibold text-2xl lg:text-3xl mb-4 lg:mb-7 font-Marcellus">
//                 Toys Sub-Categories
//             </h3>
//             <div className="flex mx-auto justify-center mb-10">
//                 <div
//                     onClick={() => handleTabClick("Disney Princess")}
//                     className={` mx-3  font-bold  text-base  cursor-pointer cricket ${activeToy === "Disney Princess"
//                         ? " block rounded bg-gradient-to-r from-orange-200 to-amber-200 px-4 py-3 text-sm font-medium text-black shadow"
//                         : ""
//                         }`}
//                 >
//                     Disney Princess
//                 </div>
//                 <div
//                     onClick={() => handleTabClick("Frozen")}
//                     className={`mx-3  font-bold  text-base cursor-pointer football ${activeToy === "Frozen" ? " block rounded bg-gradient-to-r from-orange-200 to-amber-200 px-4 py-3 text-sm font-medium text-black shadow" : ""
//                         }`}
//                 >
//                     Frozen
//                 </div>
//                 <div
//                     onClick={() => handleTabClick("Duck")}
//                     className={` mx-3 font-bold  text-base  cursor-pointer  badminton ${activeToy === "Duck" ? " block rounded bg-gradient-to-r from-orange-200 to-amber-200 px-4 py-3 text-sm font-medium text-black shadow" : ""
//                         }`}
//                 >
//                     Duck
//                 </div>
//             </div>
//             <div className="grid grid-cols-1 mx-4  md:grid-cols-2 lg:grid-cols-3 md:mx-6 lg:mx-8 gap-10">
//                 {toys.map((toy) => (
//                     <div className="card full bg-base-100 shadow-xl">
//                         <figure>
//                             <img src={toy.picture} className="w-full h-60" alt="Shoes" />
//                         </figure>
//                         <div className="card-body">
//                             <h2 className="card-title">
//                                 Name : {toy.toy_name}
//                             </h2>
//                             <p className="text-lg font-semibold">Price : $ {toy.price}</p>
//                             <p className="text-lg font-semibold">Ratings : {toy.ratings} star</p>
//                             <Link to={`/CategoryToys/${toy._id}`}>
//                                 <div className="card-actions w-full justify-center mt-2">
//                                     <button onClick={handleViewDetails} className="block w-full rounded bg-gradient-to-r from-orange-200 to-amber-200 px-4 py-3 text-sm font-medium text-black shadow">View Details</button>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Categories;

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { toast } from "react-toastify";
import { AuthContext } from '../../../Provider/AuthProvider';


const ShopByCategory = () => {
  const [allData, setAllData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://disney-world-server.vercel.app/CategoryToys")
      .then((res) => res.json())
      .then((data) => setAllData(data))
      .catch((error) => console.error(error));
  }, []);

  // Without login alert a toast message
  const handleViewDetails = () => {
    if (!user) {
        toast("You have to log in first to view details", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div>
      <section className="my-container">
      <div className='p-5 my-5 border rounded-lg'>
      <div className='my-5'>
        {/* <img className='h-16 w-16 mx-auto p-2' src={logo} alt="" /> */}
        <p className='font-bold text-center my-2 text-3xl text-black'>Shop by Category</p>
        {allData.length > 0 && (
          <Tabs
            selectedIndex={activeTab}
            onSelect={(index) => setActiveTab(index)}
          >
            <TabList className="font-bold text-xl text-center tabs tabs-boxed justify-center  align-items-center bg-pink-300 ">
              <Tab >Disney</Tab>
              <Tab>Frozen</Tab>
              <Tab>Duck</Tab>
            </TabList>
         
     
            <TabPanel>
              <div className="lg:flex">
                {allData
                  .filter((data) => data.category === "disney-princess")
                  .slice(0, 3)
                  .map((data) => (
                    <div key={data._id} className="lg:w-1/2 p-4">
                      <div className="card h-80 card-side bg-rose-200 shadow-xl">
                        <figure>
                          <img
                            src={data.picture}
                            alt=""
                            className="rounded-lg h-full object-cover w-full"
                          />
                        </figure>
                        <div className="card-body  flex  pl-2 w-1/2">
                          <h5 className="font-bold text-2xl">
                            {data.toy_name}
                          </h5>
                          <div className="text-lg mt-4 font-semibold text-gray-500 tracking-widest">
                            <p>Price:${data.price}</p>
                            <p>Rating:{data.ratings}</p>
                          </div>
                          <Link
                            to={`categoryToyDetails/${data._id}`}
                            onClick={handleViewDetails}
                            className="card-actions justify-start mt-8"
                          >
                            <button className="btn btn-pink-900 text-white">View Details</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>

            
            <TabPanel>
              <div className="lg:flex">
                {allData
                  .filter((data) => data.category === "frozen")
                  .slice(0, 3)
                  .map((data) => (
                    <div key={data._id} className="lg:w-1/2 p-4">
                      <div className="card h-80 card-side bg-rose-200 shadow-xl">
                        <figure>
                          <img
                            src={data.picture}
                            alt=""
                            className="rounded-lg h-full object-cover w-full"
                          />
                        </figure>
                        <div className="card-body  flex pl-2 w-1/2">
                          <h5 className="font-bold text-2xl tracking-widest">
                           {data.toy_name}
                          </h5>
                          <div className="text-lg mt-4 font-semibold text-gray-500 tracking-widest">
                            <p>Price:${data.price}</p>
                            <p>Rating:{data.ratings}</p>
                          </div>
                          <Link
                            to={`categoryToyDetails/${data._id}`}
                            onClick={handleViewDetails}
                            className="card-actions justify-start mt-8"
                          >
                            <button className="btn btn-pink-900 text-white">View Details</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>

        
            <TabPanel>
              <div className="lg:flex">
                {allData
                  .filter((data) => data.category === "duck")
                  .slice(0, 3)
                  .map((data) => (
                    <div key={data._id} className="lg:w-1/2 p-4">
                      <div className="card h-80 card-side bg-rose-200 shadow-xl">
                        <figure>
                          <img
                            src={data.picture}
                            alt=""
                            className="rounded-lg h-full object-cover w-full"
                          />
                        </figure>
                        <div className="card-body flex pl-2 w-1/2 ">
                          <h5 className="font-bold text-2xl">
                            {data.toy_name}
                          </h5>
                          <div className="text-lg mt-4 font-semibold text-gray-500 tracking-widest">
                            <p>Price:${data.price}</p>
                            <p>Rating:{data.ratings}</p>
                          </div>
                          <Link
                            to={`categoryToyDetails/${data._id}`}
                            onClick={handleViewDetails}
                            className="card-actions justify-start mt-8"
                          >
                            <button className="btn btn-pink-900 text-white">View Details</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>
          </Tabs>
        )}
        </div>
        </div>
      </section>
    </div>
  );
};

export default ShopByCategory;


// import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import { toast } from "react-toastify";
// import { AuthContext } from '../../../Provider/AuthProvider';


// const ShopByCategory = () => {
//   const [allData, setAllData] = useState([]);
//   const [activeTab, setActiveTab] = useState(0);
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     fetch("https://disney-world-server.vercel.app/allToys")
//       .then((res) => res.json())
//       .then((data) => setAllData(data))
//       .catch((error) => console.error(error));
//   }, []);

//   // Without login alert a toast message
//   const handleViewDetails = () => {
//     if (!user) {
//         toast("You have to log in first to view details", {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     }
//   };

//   return (
//     <div>
//       <section className="my-container">
//       <div className='p-5 my-5 border rounded-lg'>
//       <div className='my-5'>
//         {/* <img className='h-16 w-16 mx-auto p-2' src={logo} alt="" /> */}
//         <p className='font-bold text-center my-2 text-3xl text-black'>Shop by Category</p>
//         {allData.length > 0 && (
//           <Tabs
//             selectedIndex={activeTab}
//             onSelect={(index) => setActiveTab(index)}
//           >
//             <TabList className="font-bold text-xl text-center tabs tabs-boxed justify-center  align-items-center bg-pink-300 ">
//               <Tab >Disney</Tab>
//               <Tab>Frozen</Tab>
//               <Tab>Duck</Tab>
//             </TabList>
         
     
//             <TabPanel>
//               <div className="lg:flex">
//                 {allData
//                   .filter((data) => data.category === "Disney Princess")
//                   .slice(0, 3)
//                   .map((data) => (
//                     <div key={data._id} className="lg:w-1/2 p-4">
//                       <div className="card h-80 card-side bg-rose-200 shadow-xl">
//                         <figure>
//                           <img
//                             src={data.photo}
//                             alt=""
//                             className="rounded-lg h-full object-cover w-full"
//                           />
//                         </figure>
//                         <div className="card-body  flex  pl-2 w-1/2">
//                           <h5 className="font-bold text-2xl">
//                             {data.toyName}
//                           </h5>
//                           <div className="text-lg mt-4 font-semibold text-gray-500 tracking-widest">
//                             <p>Price:${data.price}</p>
//                             <p>Rating:{data.ratings}</p>
//                           </div>
//                           <Link
//                             to={`categoryToyDetails/${data._id}`}
//                             onClick={handleViewDetails}
//                             className="card-actions justify-start mt-8"
//                           >
//                             <button className="btn btn-pink-900 text-white">View Details</button>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </TabPanel>

            
//             <TabPanel>
//               <div className="lg:flex">
//                 {allData
//                   .filter((data) => data.category === "Frozen")
//                   .slice(0, 3)
//                   .map((data) => (
//                     <div key={data._id} className="lg:w-1/2 p-4">
//                       <div className="card h-80 card-side bg-rose-200 shadow-xl">
//                         <figure>
//                           <img
//                             src={data.photo}
//                             alt=""
//                             className="rounded-lg h-full object-cover w-full"
//                           />
//                         </figure>
//                         <div className="card-body  flex pl-2 w-1/2">
//                           <h5 className="font-bold text-2xl tracking-widest">
//                            {data.toyName}
//                           </h5>
//                           <div className="text-lg mt-4 font-semibold text-gray-500 tracking-widest">
//                             <p>Price:${data.price}</p>
//                             <p>Rating:{data.ratings}</p>
//                           </div>
//                           <Link
//                             to={`categoryToyDetails/${data._id}`}
//                             onClick={handleViewDetails}
//                             className="card-actions justify-start mt-8"
//                           >
//                             <button className="btn btn-pink-900 text-white">View Details</button>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </TabPanel>

        
//             <TabPanel>
//               <div className="lg:flex">
//                 {allData
//                   .filter((data) => data.category === "Duck")
//                   .slice(0, 3)
//                   .map((data) => (
//                     <div key={data._id} className="lg:w-1/2 p-4">
//                       <div className="card h-80 card-side bg-rose-200 shadow-xl">
//                         <figure>
//                           <img
//                             src={data.photo}
//                             alt=""
//                             className="rounded-lg h-full object-cover w-full"
//                           />
//                         </figure>
//                         <div className="card-body flex pl-2 w-1/2 ">
//                           <h5 className="font-bold text-2xl">
//                             {data.toyName}
//                           </h5>
//                           <div className="text-lg mt-4 font-semibold text-gray-500 tracking-widest">
//                             <p>Price:${data.price}</p>
//                             <p>Rating:{data.ratings}</p>
//                           </div>
//                           <Link
//                             to={`categoryToyDetails/${data._id}`}
//                             onClick={handleViewDetails}
//                             className="card-actions justify-start mt-8"
//                           >
//                             <button className="btn btn-pink-900 text-white">View Details</button>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </TabPanel>
//           </Tabs>
//         )}
//         </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ShopByCategory;