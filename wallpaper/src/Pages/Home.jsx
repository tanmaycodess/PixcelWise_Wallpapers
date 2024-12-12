import React, { useState, useEffect } from 'react';
import Curtain from "../Components/Curtain";
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import ContributorPage from "../Components/Contributer";
import Curtain2 from '../Components/Curtain2';
import { HeroParallax } from '../Components/Screen';
import Wall1 from '/Wall1.jpg';
import Wall2 from '/Wall2.jpg'
import Wall3 from '/Wall3.jpg'



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

    const products = [
        {
            title: "Product 1",
            thumbnail: Wall1,
        },
        {
            title: "Product 2",
            thumbnail: Wall3,
        },
        
    ];


    return (
        <div>
            {/* {isLargeOrMediumDevice ? <Curtain /> : <Curtain2 />} */}
            <HeroParallax products={products} />
            <Hero />
            <ContributorPage />
            <Categories />
            <Footer />
        </div>
    );
};

export default Home;
