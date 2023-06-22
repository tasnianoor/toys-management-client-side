import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    useTitle('404 Error')
    return (
            <div className='flex justify-center'>
                <img className='h-screen' src="https://res.cloudinary.com/practicaldev/image/fetch/s--_GqDpWw0--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/7aqcppklh6bexoa70320.jpg" alt="" />
                <Link className='absolute bottom-10' to='/'><button className='btn'>Back To Home</button></Link>
            </div>
    );
};

export default ErrorPage;