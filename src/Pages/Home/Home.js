import React from 'react';
import Footer from '../Shared/Footer';
import ClientReviews from './ClientReviews';
import ContactUs from './ContactUs';
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
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;