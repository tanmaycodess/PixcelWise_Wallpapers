import React, { useState, useEffect, useLayoutEffect } from 'react';
import styles from './Curtain.module.css'; // Importing CSS module
import Wall3 from '/Wall3.jpg';  // Image 1
import Wall2 from '/Wall2.jpg';  // Image 2
import Wall4 from '/Wall4.mp4';  // Video
import Wall1 from '/Wall1.jpg';  // Image 2
import Navbar from './Navbar/Navbar'; // Import Navbar

// Importing React Icons
import { FaArrowRight } from 'react-icons/fa'; // Right arrow icon

function Banner() {
    // State for controlling the carousel on mobile
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Define slides for both mobile and desktop
    const desktopSlides = [
        { type: 'image', src: Wall3, alt: "Inca Trail, Peru" },
        { type: 'video', src: Wall4, alt: "Nature Video" },
        { type: 'image', src: Wall2, alt: "Blue Hole, Belize" }
    ];

    const mobileSlides = [
        { type: 'image', src: Wall3, alt: "Inca Trail, Peru" },
        { type: 'image', src: Wall1, alt: "Nature Video" },
        { type: 'image', src: Wall2, alt: "Blue Hole, Belize" }
    ];

    // Auto slide every 3 seconds for mobile view
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % mobileSlides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Check screen size to toggle mobile/desktop view
    useLayoutEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {/* Render Navbar outside the topBannerContainer on mobile */}
            {isMobile && <Navbar />}

            <section className={styles.topBannerContainer}>

                {/* Desktop Layout: 3 columns side by side */}
                {!isMobile && (
                    <div className={styles.columns}>
                        {desktopSlides.map((slide, index) => (
                            <div key={index} className={styles.column}>
                                {slide.type === 'image' ? (
                                    <img src={slide.src} className={styles.image} alt={slide.alt} />
                                ) : (
                                    <video className={styles.image} autoPlay loop muted>
                                        <source src={slide.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                                <p>
                                    {slide.type === 'image' ? 'Art beyond boundaries, for your screen.' : 'Breathe in the beauty of nature, one wallpaper at a time.'}
                                    <FaArrowRight className={styles.arrowIcon} />
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Mobile Carousel */}
                {isMobile && (
                    <div className={styles.carouselContainer}>
                        <div className={styles.carouselItem} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {mobileSlides.map((slide, index) => (
                                <div key={index} className={styles.carouselSlide}>
                                    {slide.type === 'image' ? (
                                        <img src={slide.src} className={styles.carouselImage} alt={slide.alt} />
                                    ) : (
                                        <video className={styles.carouselVideo} autoPlay loop muted>
                                            <source src={slide.src} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}

export default Banner;
