import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
// import ShopByCategory1 from '../ShopByCategory/ShopByCategory1';
import ClientReview from '../ClientReview/ClientReview';
import Popular from '../Popular/Popular';
import useTitle from '../../../Hooks/useTitle';



const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner/>
            <Gallery/>
            <Popular/>
            <ShopByCategory></ShopByCategory>
     
            {/* <ShopByCategory1></ShopByCategory1> */}
            <ClientReview></ClientReview>
        </div>
    );
};

export default Home;