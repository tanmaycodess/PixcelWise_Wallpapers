import React from 'react'
import Curtain from "../Components/Curtain";
import Hero from "../Components/Hero";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import ContributorPage from "../Components/Contributer";


const Home = () => {
    return (
        <div>
            <Curtain />
            <Hero />
            <ContributorPage />
            <Categories />
            <Footer />
        </div>
    )
}

export default Home
