import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Categories.module.css';

// Images for each category
import abstractArtImage from '/Wall1.jpg';
import natureImage from '/Wall2.jpg';
import cityscapeImage from '/Wall3.jpg';

const categories = [
  {
    title: 'Abstract Art',
    image: abstractArtImage,
    description: 'Explore unique, non-representational art that challenges your perceptions.',
    personality: 'Creative and imaginative individuals who love thinking outside the box.',
    path: '/abstract', // Define the path for each category
  },
  {
    title: 'Nature',
    image: natureImage,
    description: 'Dive into beautiful landscapes and the calming beauty of nature.',
    personality: 'Grounded and peaceful souls who seek tranquility and balance.',
    path: '/nature', // Define the path for each category
  },
  {
    title: 'Cityscaping',
    image: cityscapeImage,
    description: 'Experience the energy and vibrancy of urban landscapes and city lights.',
    personality: 'Adventurous and dynamic individuals who thrive in the fast-paced world.',
    path: '/city', // Define the path for each category
  }
];

const Categories = () => {
  return (
    <section className={styles.container}>
      <motion.h1
        className={styles.pageTitle}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Explore Our <span className={styles.highlight}>Wallpaper</span> Collection
      </motion.h1>

      <section className={styles.timelineSection}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Find Your Perfect Wallpaper, Reflect Your Personality
        </motion.h2>

        <div className={styles.timeline}>
          {categories.map((category, index) => (
            <div key={index} className={styles.timelineItem}>
              <Tilt
                options={{ max: 15, scale: 1.05, speed: 300 }}
                className={styles.tiltContainer}
              >
                <Link to={category.path}>  {/* Wrap everything in Link */}
                  <motion.div
                    className={styles.categoryCard}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      delay: index * 0.5,
                      duration: 0.6
                    }}
                  >
                    <motion.img
                      src={category.image}
                      alt={category.title}
                      className={styles.categoryImage}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.5,
                      }}
                    />
                    <div className={styles.overlay}>
                      <h2>{category.title}</h2>
                    </div>
                  </motion.div>
                </Link>
              </Tilt>

              <motion.div
                className={styles.infoCard}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  delay: index * 0.5,
                  duration: 0.6
                }}
              >
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <p><strong>Personality:</strong> {category.personality}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};


export default Categories;
