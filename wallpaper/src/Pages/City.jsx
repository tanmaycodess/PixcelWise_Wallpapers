import React, { useState } from 'react';
import styles from './Wallpaper.module.css'; // Import the CSS Module
import Navbar from '../Components/Navbar/Navbar';

const App = () => {
    const [images, setImages] = useState([
        // page 1
        { id: '1gRWbKyK6tlXZTklL-w--yZ5rnMdUba0t', name: 'city1' },
        { id: '1FN-3nhDWr-0_xqanEbad4fBdPNslDoko', name: 'city2' },
        { id: '1l7ddNJfpOGT0jwwd05c1_a7s7BesGHF0', name: 'city3' },
        { id: '1q6P33fI-orRxKnmGRe9KfBxijiDwGAtH', name: 'city4' },
        { id: '1AIg_JJcVPvIbI22jCZSjIC9P4DbfU4mW', name: 'city5' },
        { id: '1bokEEk0h973XHR5jMg1SOnQhKccT9rWh', name: 'city6' },
        { id: '1Th-ZPHeeGE0Ynq9Mk5h86EHU63cQpj8E', name: 'city7' },
        { id: '1wlSPtUphW31woFv_dmp8Jyti9jQez8pb', name: 'city8' },
        // page 2
        { id: '1ZfthdI8F10AbnJAdKDzxaXLnVV_O-zXD', name: 'city9' },
        { id: '1Blx06ZcMMtGp3LW_25I5FT5ZdDYKi6gn', name: 'city10' },
        { id: '1X-1bAS6OQjleWu8Mh3sJNpfFZMrgJ8aR', name: 'city11' },
        { id: '1MSxJYkNu-yj3Kdkx3Bkz6gFuHFmdi6Ja', name: 'city12' },
        { id: '1mgh4xvEBj9pWDgSK4W8ndMAKA-8r2noy', name: 'city13' },
        { id: '1-Z5aHoL4R9Vi5N-Hy_mW_HjYtjyGv9gQ', name: 'city14' },
        { id: '1CzNi366D5SWotGOhUa3WWh1yTX4SMtxA', name: 'city15' },
        { id: '18ileg2TMyjbDFRHHJNSc7nBtR6eiTPzf', name: 'city16' },
        // page3
        { id: '1jycDfiBFBN71XpuzPwSHVVHeIfLeJ_Yp', name: 'city17' },
        { id: '1FGaLv6rlkPJIDfOfrcQp61FslghvUWO1', name: 'city18' },
        { id: '1_N3GqOedV72vYJGkN7_vSZ-JeEIcWmVh', name: 'city19' },
        { id: '1xmT-UwOwRk7L_dPsSssWbfZQx-_uf8sh', name: 'city20' },
        { id: '18AvNPkf3TVyHh9SbI6f1DPFYxZK7nd9W', name: 'city21' },
        { id: '1U4UbsNP11DaOH5Cet0mXlWUctEi87bUF', name: 'city22' },
        { id: '1xd-PqS5y6r5r4slg__uU1SaK8auUFuXU', name: 'city23' },
        { id: '1K_73c0YJxg-DlNd9XeG4N42lBt0389s1', name: 'city24' },
        // page 4
        { id: '1vNdn0Crmi4KvmHiyIfsEF26BEpO8yUpK', name: 'city17' },
        { id: '1OKOkxjFOFQPFTKuVVmEgmKiLhV3m2nJw', name: 'city18' },
        { id: '1_AHcW3crPEx-Ruhd8RC-XVonrSPUqRkq', name: 'city19' },
        { id: '1h2JCAhhwNF5yIxFYYuLdGyZ1768Qg0RV', name: 'city20' },
        { id: '1Y8GWR913j6oVKRJY4eEkTsyVY-AHH-mu', name: 'city21' },
        { id: '1_yF7x2DcWqq_FU2QahKraNVa3ZtFTXaO', name: 'city22' },
        { id: '12zdvhmh3LI4gq6v83jLhDeCqj2h-u2mV', name: 'city23' },
        { id: '1yggNtEBPtUuXxcd0-RDBaQnLpTtF_nMS', name: 'city24' },
        // page 5

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
            setSuccessMessage('Thank you for downloading!'); // Show success message
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
