import React, { useState, useEffect } from 'react';
import Curtain from "../Components/Curtain";
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import ContributorPage from "../Components/Contributer";
import Curtain2 from '../Components/Curtain2';

const Home = () => {
    const [isLargeOrMediumDevice, setIsLargeOrMediumDevice] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeOrMediumDevice(window.innerWidth <= 1024);
        };

        // Check the screen size on initial render
        handleResize();

        // Add resize event listener to adjust on window size change
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isLargeOrMediumDevice ? <Curtain /> : <Curtain2 />}
            <Hero />
            <ContributorPage />
            <Categories />
            <Footer />
        </div>
    );
};

export default Home;
