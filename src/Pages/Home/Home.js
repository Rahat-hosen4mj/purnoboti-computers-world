import React from 'react';
import Footer from '../Shared/Footer';
import ClientReviews from './ClientReviews';
import DealOfDay from './DealOfDay';
import HomeBanner from './HomeBanner';
import LaptopParts from './LaptopParts';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <LaptopParts />
            <DealOfDay />
            <WhyChooseUs />
            <ClientReviews />
            <Footer />
        </div>
    );
};

export default Home;