import { useState, useEffect } from "react";
import Image from "/src/assets/images/Image 93.png"; // Nếu dùng Vite, đảm bảo đường dẫn tuyệt đối

export default function DiscoverChefity() {
    useEffect(() => {
        console.log("Component mounted");
    }, []);

    const handleNext = () => {
        console.log("Next button clicked");
    };

    const handleSkip = () => {
        console.log("Skip button clicked");
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Discover Chefify</h2>
            <p style={styles.description}>
                Easy and delicious cooking instructions right here. Start exploring now!
            </p>
            <div style={styles.imageWrapper}>
                <img src={Image} alt="Discover Chefity" style={styles.image} />
            </div>
            <div style={styles.pagination}>
                <span style={styles.dot}></span>
                <span style={{ ...styles.dot, backgroundColor: "#FF4081" }}></span>
                <span style={styles.dot}></span>
            </div>
            <div style={styles.buttonContainer}>
                <button style={styles.nextButton} onClick={handleNext}>Next</button>
                <button style={styles.skipButton} onClick={handleSkip}>Skip</button>
            </div>
        </div>
    );
}

// 🔹 Styles
const styles = {
    container: {
        width: "500px",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        margin: "auto",
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#FF4081",
    },
    description: {
        fontSize: "14px",
        color: "#555",
    },
    imageWrapper: {
        margin: "15px 0",
    },
    image: {
        width: "100%",
        borderRadius: "10px",
    },
    pagination: {
        display: "flex",
        justifyContent: "center",
        margin: "10px 0",
    },
    dot: {
        width: "10px",
        height: "10px",
        margin: "0 2px",
        backgroundColor: "#ddd",
        borderRadius: "50%",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "column", // Sắp xếp theo cột (Next trên, Skip dưới)
        alignItems: "center",
        gap: "10px",
        marginTop: "10px",
    },
    nextButton: {
        backgroundColor: "#FF4081",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "20px",
        cursor: "pointer",
        fontSize: "16px",
        width: "80%", // Tăng chiều rộng để nhìn cân đối hơn
    },
    skipButton: {
        background: "none",
        border: "none",
        color: "#555",
        cursor: "pointer",
        fontSize: "14px",
    },
};
