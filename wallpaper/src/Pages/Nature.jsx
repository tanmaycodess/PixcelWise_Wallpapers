import React, { useState } from "react";
import styles from "./Wallpaper.module.css"; // Import the CSS Module
import Navbar from "../Components/Navbar/Navbar";

const App = () => {
    const [images, setImages] = useState([
        { id: "nature23_rra3kl", name: "Nature 1" },
        { id: "nature25_xnnll4", name: "Nature 2" },

        { id: "nature24_yzurq7", name: "Nature 3" },
        { id: "nature28_eumga9", name: "Nature 4" },

        { id: "nature26_lyn78i", name: "Nature 5" },
        { id: "nature29_fhihbp", name: "Nature 6" },

        { id: "nature27_wtwrcj", name: "Nature 7" },
        { id: "nature30_ochmzz", name: "Nature 8" },

        { id: "nature32_ijrwcu", name: "Nature 9" },
        { id: "nature31_cngcpl", name: "Nature 10" },

        { id: "nature34_hf7dg0", name: "Nature 11" },
        { id: "nature35_ytrlxw", name: "Nature 12" },

        { id: "nature33_thi9um", name: "Nature 13" },
        { id: "nature36_a8nbyx", name: "Nature 14" },

        { id: "nature38_a1nm6o", name: "Nature 15" },
        { id: "nature40_lsfebt", name: "Nature 16" },

        { id: "nature41_vplg5m", name: "Nature 17" },
        { id: "nature37_akbeq2", name: "Nature 18" },

        { id: "nature41_vplg5m", name: "Nature 19" },
        { id: "nature39_fin7md", name: "Nature 20" },

        { id: "nature42_ancz1j", name: "Nature 21" },
        { id: "nature46_k6ndxq", name: "Nature 22" },

        { id: "nature44_awumer", name: "Nature 23" },
        { id: "nature45_gmt7cd", name: "Nature 24" },

        { id: "nature43_toegtg", name: "Nature 25" },
        { id: "cld-sample-2", name: "Nature 26" },

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
