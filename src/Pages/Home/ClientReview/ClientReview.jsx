import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ClientReview.css'

// import required modules
import { Autoplay, Pagination} from 'swiper';

import client1 from '../../../assets/images/image11.jpg'
import client2 from '../../../assets/images/image22.jpg'
import client3 from '../../../assets/images/image33.jpg'
import Rating from 'react-rating';
import { StarIcon } from '@heroicons/react/24/solid';

const ClientReview = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
    return (
        <div className='my-container mt-24'>
            <div className="section-title text-center mb-10">
                <h5 className='text-3xl font-bold mb-2'>Client's Review</h5>
                <p className='md:w-1/2 mx-auto  '> We sends our customers regular emails throughout the journey of their purchase. Also, once a product has been delivered, we drop in an email asking for the customer's valuable feedback.They give us their valuable feedback which makes our journey more easier. </p>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='p-5 mb-10'>
                        <img src={client1} alt="" className='img w-10 h-10 rounded-full' />
                        <h3 className=' text-2xl font-bold mb-4'>Tasmia Islam</h3>
                        <Rating
                            placeholderRating={5}
                            emptySymbol={<StarIcon className='h-6 w-6'/>}
                            placeholderSymbol={<StarIcon className='h-6 w-6 text-warning'/>}
                            fullSymbol={<StarIcon className='h-6 w-6 text-warning'/>}
                            readonly
                        />
                        <p>"This is really great, I've been ordering a lot of products from it for the past 4 years, haven't faced any primal issue yet. Their service is better than the other e-commerce webs in our country. Though the only annoying thing is that they continuously send notifications or promotions and try seducing people for buying new products.,"</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5 mb-10'>
                        <img src={client3} alt="" className='img w-10 h-10 rounded-full' />
                        <h3 className=' text-2xl font-bold mb-4'>Amir Hossain</h3>
                        <Rating
                            placeholderRating={4.5}
                            emptySymbol={<StarIcon className='h-6 w-6 '/>}
                            placeholderSymbol={<StarIcon className='h-6 w-6 text-warning'/>}
                            fullSymbol={<StarIcon className='h-6 w-6 text-warning'/>}
                            readonly
                        />
                        <p>"This website in Bangladesh is currently leading Ecommerce of Bangladesh.As there is no competition in E-commerce sector in Bangladesh, they increasing their delivery fee as well as all products fee. They produce various competition throughout the year.But none of these campaign are fairly observed.This website in Bangladesh needs to come out clean and stop increasing delivery charge and product price.Stop taking unfair advantage.."</p>
                   
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5 mb-10'>
                        <img src={client2} alt="" className='img w-10 h-10 rounded-full' />
                        <h3 className=' text-2xl font-bold mb-4'>Russel Hussain</h3>
                        <Rating
                            placeholderRating={4.5}
                            emptySymbol={<StarIcon className='h-6 w-6 '/>}
                            placeholderSymbol={<StarIcon className='h-6 w-6 text-warning'/>}
                            fullSymbol={<StarIcon className='h-6 w-6 text-warning'/>}
                            readonly
                        />
                        <p className=''>"This is exactly what turns away buyers from ecommerce stores. Their incompetence is legendary! It is amazing how such a large ecommerce platform can afford to scam its buyers like they do. Most of the time the product will be delivered late, or the completely wrong product will be delivered. And then the pain of the returns begins. Good luck getting your product returned properly!"</p>
                     
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default ClientReview;