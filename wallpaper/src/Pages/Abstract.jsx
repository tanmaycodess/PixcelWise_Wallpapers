import React, { useState } from 'react';
import styles from './Wallpaper.module.css'; // Import the CSS Module
import Navbar from '../Components/Navbar/Navbar';

const App = () => {
    const [images, setImages] = useState([
        // page 1
        { id: '1CnSgPhxA9eX6zlneKVWHawFojuxQUQ4w', name: 'abstract1' },
        { id: '1ZwdUj2JG0qlYAp0mLiYROWdn-5LJ2ems', name: 'abstract2' },


        // More images here ...
    ]);

    const imagesPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false); // Loading state
    const [successMessage, setSuccessMessage] = useState(''); // Success message state

    // Function to change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate which images to show based on currentPage
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    // Construct the image URLs for viewing and downloading
    const imageUrls = currentImages.map((image) => ({
        ...image,
        url: `https://drive.google.com/uc?export=view&id=${image.id}`,
        downloadUrl: `https://drive.google.com/uc?export=download&id=${image.id}`,
        iframeUrl: `https://drive.google.com/file/d/${image.id}/preview`,
    }));

    // Function to trigger image download
    const downloadImage = (url, name) => {
        setLoading(true); // Start loading
        const link = document.createElement('a');
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Simulate a delay for the download
        setTimeout(() => {
            setLoading(false); // Stop loading
            setSuccessMessage('downloading Successfull!'); // Show success message
            setTimeout(() => setSuccessMessage(''), 3000); // Hide message after 3 seconds
        }, 1500); // Adjust delay as needed
    };

    // Calculate total pages
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(images.length / imagesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <Navbar />
            <div className={styles.App}>
                <div className={styles['image-gallery']}>
                    {imageUrls.map((image, index) => (
                        <div key={index} className={styles['image-item']}>
                            <iframe
                                src={image.iframeUrl}
                                width="500"
                                height="500"
                                title={image.name}
                                frameBorder="0"
                                allow="autoplay"
                                loading="lazy" // Lazy loading for performance
                            />
                            <button
                                onClick={() => downloadImage(image.downloadUrl, image.name)}
                                className={styles['download-btn']}
                                disabled={loading} // Disable the button while loading
                            >
                                {loading ? 'Downloading...' : 'Download'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className={styles.pagination}>
                    {pageNumbers.map((number) => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            className={currentPage === number ? styles.active : styles.pageBtn}
                        >
                            {number}
                        </button>
                    ))}
                </div>

                {/* Success Pop-up */}
                {successMessage && (
                    <div className={styles.successMessage}>
                        <div className={styles.messageContent}>
                            <h2>{successMessage}</h2>
                            <p>🎉 Thanks for supporting Pixelwise!</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default App;
