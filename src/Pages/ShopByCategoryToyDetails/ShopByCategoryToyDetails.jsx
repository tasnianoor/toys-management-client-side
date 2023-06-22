import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const ShopByCategoryToyDetails = () => {
    const categoryToyDetails= useLoaderData();
    const {toy_name, price, ratings, picture} = categoryToyDetails;
    useTitle('Category Toy Details')

    console.log(categoryToyDetails)
    return (
        <div className='p-10 mt-10 mb-5 w-full'>
            <p className='text-3xl font-bold mb-5 text-center'>Details of {toy_name}</p>
            <div className='flex md:flex-row flex-col sm:space-y-4 md:space-x-5 w-full'>
            <img className='w-2/3' style={{height : '80vh'}} src={picture} alt="" />
            <div className='w-1/3'>
                <p className='text-xl font-bold'>Name : <span className='font-normal'>{toy_name}</span></p>
              
                <p className='text-xl font-bold'>Price : <span className='font-normal'>{price} $</span></p>
                <p className='text-xl font-bold'>Ratings : <span className='font-normal'>{ratings}</span></p>
            </div>
            </div>
        </div>
    );
};

export default ShopByCategoryToyDetails;