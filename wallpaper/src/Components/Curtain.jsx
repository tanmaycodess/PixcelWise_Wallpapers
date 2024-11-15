import styles from './Curtain.module.css'; // Importing CSS module
import Wall3 from '/Wall3.jpg';  // Image 1
import Wall2 from '/Wall2.jpg';  // Image 2
import Wall4 from '/Wall4.mp4';  // Video

// Importing React Icons
import { FaArrowRight } from 'react-icons/fa'; // Right arrow icon

function Banner() {
    return (
        <section className={styles.topBannerContainer}>
            <div className={styles.overlay}>
                <h1>PixcelWise Help's Exploring Stunning Wallpapers for Your Screen</h1>
            </div>
            <div className={styles.columns}>
                {/* Column 1 */}
                <div className={styles.column}>
                    <img src={Wall3} className={styles.image} alt="Inca Trail, Peru" />
                    <p>
                        Art beyond boundaries, for your screen.
                        <FaArrowRight className={styles.arrowIcon} />
                    </p>
                </div>

                {/* Column 2 */}
                <div className={styles.column}>
                    <video className={styles.image} autoPlay loop muted>
                        <source src={Wall4} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <p>
                        Breathe in the beauty of nature, one wallpaper at a time.
                        <FaArrowRight className={styles.arrowIcon} />
                    </p>
                </div>

                {/* Column 3 */}
                <div className={styles.column}>
                    <img src={Wall2} className={styles.image} alt="Blue Hole, Belize" />
                    <p>
                        The city never sleeps—now, neither does your screen.
                        <FaArrowRight className={styles.arrowIcon} />
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Banner;
