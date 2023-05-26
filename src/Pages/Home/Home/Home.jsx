import React from 'react';
import Banner from '../Banner/Banner';
import OurService from '../OurService/OurService';
import InfoSection from '../InfoSection/InfoSection';
import ReviewSection from '../ReviewSection/ReviewSection';
import ExpertDoctor from '../ExpertDoctor/ExpertDoctor';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurService></OurService>
            <InfoSection></InfoSection>
            <ReviewSection></ReviewSection>
            <ExpertDoctor></ExpertDoctor>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;