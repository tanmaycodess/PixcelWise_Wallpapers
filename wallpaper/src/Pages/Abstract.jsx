import React, { useState } from "react";
import styles from "./Wallpaper.module.css"; // Import the CSS Module
import Navbar from "../Components/Navbar/Navbar";

const App = () => {
    const [images, setImages] = useState([
        { id: "abstract3_mnkanv", name: "Abstract 1" },
        { id: "abstract2_b1e2cx", name: "Abstract 2" },
        // More images here with Cloudinary public IDs
    ]);

    const imagesPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [imageLoadingStates, setImageLoadingStates] = useState(
        images.reduce((acc, image) => {
            acc[image.id] = true; // Initially, all images are loading
            return acc;
        }, {})
    );

    const [successMessage, setSuccessMessage] = useState(""); // Success message state

    const cloudName = "dvswnibip";

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    const imageUrls = currentImages.map((image) => ({
        ...image,
        url: `https://res.cloudinary.com/${cloudName}/image/upload/f_auto/${image.id}`,
        downloadUrl: `https://res.cloudinary.com/${cloudName}/image/upload/fl_attachment/${image.id}`,
    }));

    const handleImageLoad = (id) => {
        setImageLoadingStates((prevState) => ({
            ...prevState,
            [id]: false, // Set the loading state of the image to false once it has loaded
        }));
    };

    const downloadImage = (url, name) => {
        const link = document.createElement("a");
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setSuccessMessage("Download Successful!");
        setTimeout(() => setSuccessMessage(""), 3000); // Hide message after 3 seconds
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(images.length / imagesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <Navbar />
            <div className={styles.App}>
                <div className={styles["image-gallery"]}>
                    {imageUrls.map((image) => (
                        <div key={image.id} className={styles["image-item"]}>
                            {imageLoadingStates[image.id] && (
                                <div className={styles["loading-spinner"]}>Loading...</div>
                            )}
                            <img
                                src={image.url}
                                alt={image.name}
                                onLoad={() => handleImageLoad(image.id)}
                                className={imageLoadingStates[image.id] ? styles.hidden : ""}
                            />
                            {!imageLoadingStates[image.id] && (
                                <button
                                    onClick={() => downloadImage(image.downloadUrl, image.name)}
                                    className={styles["download-btn"]}
                                >
                                    Download
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className={styles.pagination}>
                    {pageNumbers.map((number) => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            className={
                                currentPage === number ? styles.active : styles.pageBtn
                            }
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
