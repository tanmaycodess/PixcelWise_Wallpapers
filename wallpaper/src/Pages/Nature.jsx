import React, { useState } from 'react';
import styles from './Wallpaper.module.css'; // Import the CSS Module
import Navbar from '../Components/Navbar/Navbar';

const App = () => {
    const [images, setImages] = useState([
        // page 1
        // { id: '17jesAumQ2BviWk8HKNNDn79iEmidBJJh', name: 'city1' },
        // { id: '1zu9zqhraASt8kj_QXebAFGIFVb4dBo2x', name: 'city2' },
        // { id: '1BHiXwCU0OcvtsxsSb7MHRQAOlmKnH_KJ', name: 'city3' },
        // { id: '1TfPeMnr_SH3USeh4uVCpurqbhFjMbb0y', name: 'city4' },
        // { id: '1t1SMxqZJB9HzsZBFfKMpqPuPshrXhqvQ', name: 'city5' },
        // { id: '1Lz75A8jvaD_T8oiTp86HYPKeUH2VWm2j', name: 'city6' },
        // { id: '1VlbGtcpd2rcvyffDlMYXXx7WsnD8oP1M', name: 'city7' },
        // { id: '1G6-PxcZGCWOXm0wbkYjGmy86_Glc_m37', name: 'city8' },
        // page 2
        // { id: '1KM4kPAARgjOb2m9XoAOEZ-sO0hAz6QN', name: 'city9' },
        // { id: '1Kxd-oESREBuzOvybYV1fTAOkNL_Nzjal', name: 'city10' },
        // { id: '1eo9rSPWRZURISbeDPcFftN50rkrzBK7Z', name: 'city11' },
        // { id: '1yXfUas_2RcXyCksPTIAIO_d7Z954OM9u', name: 'city12' },
        // { id: '1Q55_DloSRzpr2rTcUu6EOpQd7ySgJMQX', name: 'city13' },
        // { id: '1fAzVosSOoHSBWAYGRqb6I9BSi7ubbMfH', name: 'city14' },
        // { id: '1h1ySJBUivt84yrmsvGcSHy5MlkC9X1dC', name: 'city15' },
        // { id: '17Ly1d3At-L9ol5qYBPO4Ap89ZAstD3YN', name: 'city16' },
        // page3
        // { id: '1uXDdV8z5uMUSuFnpO_i9fZbgrVErDw4q', name: 'city17' },
        // { id: '1V21JrfV0yQvaaWONCT20D47GfXtDn-tK', name: 'city18' },
        // { id: '1-oMdqKx-ElBmWqVotGIScHo0SAGG4d-z', name: 'city19' },
        // { id: '1ePNENbWrOYM95ycNTukYzMCTNTkqBvul', name: 'city20' },
        // { id: '1xqNa1C5wNDTjhaC5huk-B3IkJtyxCgii', name: 'city21' },

        { id: '1OBRZUNhnRPfvCMz3K1cAkISGIt3PGFCn', name: 'nature22' },
        { id: '14Q6SXh2cRavnfNsgfMGPq6l6Uc17Iyf-', name: 'nature23' },
        { id: '1ltePBK9zppe2IVWeJiMqlo7Y8KRGHFhK', name: 'nature24' },
        // page 4
        { id: '1w5y2IU_fC-l8Fs7Ktwn8lki3THgsSIRW', name: 'nature25' },
        { id: '14k_MoHsYx6-F-Lf6K-hawm0_U68nIain', name: 'nature26' },
        { id: '198GQpXBx0nqcED18xHnlO-JJ_H0ywlX2', name: 'nature27' },
        { id: '1h0AKjvf6oB9J6y-1zP74ULptGt0BkV5u', name: 'nature28' },
        { id: '1jZIBHJ8shUdHffdvOErfuh7UzdOegwNI', name: 'nature29' },
        { id: '1nDzVa8DzuMWSOz57weF_6gSqx8ra4NRI', name: 'nature30' },
        { id: '1Xy4zKykEWxIIrs1HDwcIqnqDbICavY3U', name: 'nature31' },
        { id: '1fp821TMq6fih4ngcB5Wpnvb-xJR7dfhr', name: 'nature32' },
        // page 5
        { id: '1ICl4zrreMm7__bf9Aow4Kub6SiJBHIZT', name: 'nature33' },
        { id: '1NnOrpKYLlHZP6jJpEdrkM4TrmZEwyyO3', name: 'nature34' },
        { id: '11zQ5lXNtC9xn7xcfnxxope_p7k3pQ4_c', name: 'nature35' },
        { id: '1EVRsOodcvU99BTSZ_thitfmF_BWbAABY', name: 'nature36' },
        { id: '1Yzy8lBoHqHoLFngDgMCgRToDxTjNUfY9', name: 'nature37' },
        { id: '1kJuBlEKRf-lpafOuuNeDENmIHAkXmrow', name: 'nature38' },
        { id: '1UI_VWY4mrgyCfS1X4H5VKhl-g_2uzYBP', name: 'nature39' },
        { id: '1ckcbRcDIfKA_nb8WgvJwRIvVdXgZAA4R', name: 'nature40' },
        // page 6
        { id: '1M9vXIVp6bJ6Woed0QmJEtqjpMr2t74rN', name: 'nature41' },
        { id: '1Ez_qAUwdZLEmGm3k68jlwqiZMmk-mBzp', name: 'nature42' },
        { id: '11WT2MNe6zhpvXKFMVxtYhYwO0WTLrsZz', name: 'nature43' },
        { id: '13lkym7UBjkwuyqOiwxJKrosXZv_40NEd', name: 'nature44' },
        { id: '1K2IUmLXaYidmMo13ZQcsL-bd3VgZWUMh', name: 'nature45' },

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
