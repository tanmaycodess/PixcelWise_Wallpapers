import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css'; // Import the CSS module
import { motion } from 'framer-motion'; // For animations


const Footer = () => {
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Get the scroll position of the page
            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // When the user is near the bottom of the page (within 100px of the bottom)
            if (scrollPosition >= documentHeight - 100) {
                setIsFooterVisible(true);
            } else {
                setIsFooterVisible(false);
            }
        };

        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);

        // Cleanup when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.pageContainer}>
            {/* Main content section */}
            <div className={styles.content}>
                
                <div className={styles.contentHeader}>
             
                    <motion.h1
                        className={styles.thankYouHeading}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Thank You for Visiting!
                    </motion.h1>
                    <motion.p
                        className={styles.subheading}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        We're so glad you stopped by. Your journey to the perfect wallpaper starts here!
                    </motion.p>
                </div>

                <center>
                    <motion.div
                        className={styles.contentBody}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <p>
                            Whether you’re looking for calm nature views, abstract designs to inspire your creativity, or vibrant cityscapes, we’re happy to help you find the perfect match for your space.
                        </p>
                        <p>
                            Every wall deserves a beautiful story, and we’re grateful you chose us to help tell yours.
                        </p>
                    </motion.div>
                </center>
                

                <motion.div
                    className={styles.ctaContainer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <button
                        className={styles.ctaButton}
                        onClick={() => window.scrollTo(0, 0)}  // Smooth scroll back to the top or another interaction
                    >
                        Return to Top
                    </button>
                </motion.div>

            </div>


            {/* Footer */}
            <div className={`${styles.footer} ${isFooterVisible ? styles.active : ''}`}>
                <a href="https://pixcelwisedevelopers.vercel.app" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
                    @Pixelwise
                </a>
            </div>

        </div>
    );
};

export default Footer;
