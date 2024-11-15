import React, { useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import Wall2 from './Canvas/Wall2'; // Import the Computers component
import styles from './Contributer.module.css'; // Import the CSS Module
import gsap from 'gsap';
import { motion } from 'framer-motion'; // Import Framer Motion for animation
import { useInView } from 'react-intersection-observer'; // Hook to trigger animations when the element is in view

const ContributorsPage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 500);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // GSAP animations on component mount (optional, for other animations)
    useEffect(() => {
        gsap.from('.content', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power4.out',
        });

        gsap.from('.contributor', {
            opacity: 0,
            y: 20,
            stagger: 0.2,
            duration: 1,
            ease: 'power4.out',
        });
    }, []);

    // Set up Framer Motion for page visibility animation
    const { ref: contentRef, inView: contentInView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.5, // Trigger when 50% of the element is in the viewport
    });

    const { ref: contributorsListRef, inView: contributorsInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div className={styles.contributorsPage}>
            {/* Flex container for layout */}
            <div className={styles.layoutContainer}>
                {/* Left Side - 3D Model */}
                <section className={styles.hero}>
                    <Canvas
                        frameloop="demand"
                        shadows
                        camera={{ position: [15, 5, 10], fov: 30 }}  // Adjusted camera for better fit
                        gl={{ preserveDrawingBuffer: true }}
                    >
                        <Suspense fallback="Loading...">
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
                            <Wall2 isMobile={isMobile} />
                        </Suspense>
                        <Preload all />
                    </Canvas>
                </section>

                <div className={styles.iconContainer}>
                    {/* Circle and line */}
                    <div className={styles.line} />
                </div>

                {/* Right Side - Content */}
                <motion.section
                    className={styles.content}
                    ref={contentRef}
                    initial={{ opacity: 0, y: 50 }}  // Initial state for animation
                    animate={{ opacity: contentInView ? 1 : 0, y: contentInView ? 0 : 50 }}  // Animation based on visibility
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <h1>Thank You to Our Amazing Contributors!</h1>
                    <p>
                        We want to extend our heartfelt thanks to all the talented individuals who
                        have generously shared their images for our wallpaper website.
                    </p>

                    {/* Contributors List */}
                    <motion.div
                        className={styles.contributorsList}
                        ref={contributorsListRef}
                        initial={{ opacity: 0, y: 20 }}  // Initial state for contributors
                        animate={{ opacity: contributorsInView ? 1 : 0, y: contributorsInView ? 0 : 20 }}  // Animation based on visibility
                        transition={{ staggerChildren: 0.2, duration: 1, ease: 'easeOut' }}
                    >
                        <div className={styles.contributor}>
                            <p>Akanksha Kumar</p>
                        </div>
                        <div className={styles.contributor}>
                            <p>Chirayu Yadav</p>
                        </div>
                       
                        {/* Add more contributors as needed */}
                    </motion.div>
                </motion.section>
            </div>
        </div>
    );
};

// Wall2 Component with continuous rotation
const Wall3 = ({ isMobile }) => {
    useFrame((state, delta) => {
        // Apply rotation to the object
        state.scene.rotation.y += delta * 0.1; // Adjust 0.1 for desired speed
    });

    return (
        <mesh>
            {/* Your 3D model goes here */}
            <boxBufferGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
};

export default ContributorsPage;
