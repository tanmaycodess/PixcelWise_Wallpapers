import React, { useState } from "react";
import styles from "./Wallpaper.module.css"; // Import the CSS Module
import Navbar from "../Components/Navbar/Navbar";

const App = () => {
    const [images, setImages] = useState([
        { id: "city32_ngbm0n", name: "City 1" },
        { id: "city33_pmnpdx", name: "City 2" },

        { id: "city34_mfhmmc", name: "City 3" },
        { id: "city35_hsxibs", name: "City 4" },

        { id: "city36_kw7wjv", name: "City 5" },
        { id: "city37_cm6njm", name: "City 6" },

        { id: "city38_skixff", name: "City 7" },
        { id: "city40_irvd6z", name: "City 8" },

        { id: "city39_xtobg6", name: "City 9" },
        { id: "city1_ictxxe", name: "City 10" },

        { id: "city2_yx9ve5", name: "City 11" },
        { id: "city4_ak7jvu", name: "City 12" },

        { id: "city3_oveuct", name: "City 13" },
        { id: "city7_rbc9y9", name: "City 14" },

        { id: "city5_vovpt4", name: "City 15" },
        { id: "city8_zgpqyp", name: "City 16" },

        { id: "city9_udpsmk", name: "City 17" },
        { id: "city11_ng15yv", name: "City 18" },

        { id: "city12_xzs3gw", name: "City 19" },
        { id: "city13_o44ixa", name: "City 20" },

        { id: "city15_bl39s2", name: "City 21" },
        { id: "city20_wqtett", name: "City 22" },

        { id: "city19_xg3lzb", name: "City 23" },
        { id: "city24_uclkz7", name: "City 24" },

        { id: "city28_pxqglz", name: "City 25" },
        { id: "city25_jamwxz", name: "City 26" },

        { id: "city27_jbhbdb", name: "City 27" },
        { id: "city29_d0ghi4", name: "City 28" },

        { id: "city41_ell6pi", name: "City 29" },
        { id: "city30_gbplo8", name: "City 30" },

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
