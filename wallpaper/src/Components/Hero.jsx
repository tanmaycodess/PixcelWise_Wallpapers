import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import Wall from './Canvas/Wall';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContainer}>
                {/* Left Section - Content */}
                <div className={styles.contentContainer}>
                    <div className={styles.iconContainer}>
                        {/* Circle and line */}
                        <div className={styles.line} />
                    </div>

                    <div className={styles.headingContainer}>
                        {/* Animated Heading */}
                        <motion.h1
                            className={styles.headingText}
                            initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and a small downward position
                            whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up when in view
                            viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% of the element is in view
                            transition={{ duration: 3, ease: 'easeOut' }} // Transition properties
                        >
                            Hello, I'm <span className={styles.highlight}>PixcelWise</span>
                        </motion.h1>

                        <p className={styles.subText}>
                            We are passionate web developers, combining creativity and technical expertise to deliver exceptional web experiences. <br />
                            As freelancers in web development, we've decided to take our skills to the next level by launching our very own wallpaper website, <br />
                            where we bring stunning, high-quality wallpapers to life. Explore our collection and elevate your space with beautiful visuals.
                        </p>
                    </div>
                </div>

                {/* Right Section - Wall */}
                <div className={styles.wallContainer}>
                    <Wall />
                </div>
            </div>
        </section>
    );
};

export default Hero;
