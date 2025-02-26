import { useState, useEffect } from "react";
import img from "../assets/images/Image 72.png";

export default function Login() {
    useEffect(() => {
        console.log("Component mounted");
    }, []);
    const handleContinue = () => {
        console.log('');
    };
    const handlewithGG = () => {
        console.log('');
    };
    const handlewithFB = () => {
        console.log('');
    };
    const handlewithAP = () => {
        console.log('');
    };

    const [name, setName] = useState('');
   
  
  
    function handleChange(e){
      setName(e.target.value);
    }
  
    return (
        
            <div style={styles.container}>

                  <div style={styles.imageWrapper}>
                    <img src={img}  style={styles.image} alt="Login" />
                    <div style={styles.overlay}>
                    <p style={styles.textOverlay}>
                    "Embrace the art of cooking, where flavors come alive!"
                </p>
                </div>
                </div>

                <div style={styles.contentWrapper}>
                <h2 style={styles.title}>Login</h2>
                <p style={styles.description}>
                    Enter your email to login.
                </p>
                <input placeholder = 'Enter your email' onChange={handleChange} type="text" style={styles.input} />

                <div style={styles.buttonContainer}>

                    <button style={styles.continueButton} onClick={handleContinue}>Continue</button>

                    <p style={{fontSize: "14px", color: "#808080", marginTop: "0px"}}>-----------------------------OR------------------------------</p>
                    <p style={{fontSize: "12px", color: "#808080", marginTop: "0px"}}>By continuing, you agree to the updated Terms of Sale, Terms of Service, and Privacy Policy.</p>

                    <button style={{...styles.whiteButton, color: "red"}} onClick={handlewithGG }><span style={styles.icon}>G </span>Continue with Google</button>
                    <button style={{...styles.whiteButton, color: "blue"}} onClick={handlewithFB }><span style={styles.icon}>f </span>Continue with FaceBook</button>
                    <button style={{...styles.whiteButton, color: "black"}} onClick={handlewithAP }>🍏Continue with Apple</button>
                </div>

              
    
                </div>
            </div>
        );
}

const styles = {

    container: {
        width: "900px",
        height: "500px", 
        padding: "20px",
        display: "flex", // Dùng Flexbox để chia layout
        alignItems: "stretch", // Căn giữa theo chiều dọc
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        margin: "auto",
        overflow: "hidden", // Tránh bị tràn nội dung
    },
    contentWrapper: {
        flex: 1, // Nội dung chiếm 1 phần của container
        display: "flex",
        flexDirection: "column", // Sắp xếp theo cột
        paddingLeft: "20px", 
      
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#454545",
        textAlign: "left",
    },

    description: {
        fontSize: "14px",
        color: "#454545",
        textAlign: "left",
    },
    imageWrapper: {
        flex: 1, // Chiếm 50% của container
        display: "flex",
        height: "100%", // Đảm bảo hình ảnh phủ hết chiều cao
        position: "relative",
    },

    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover", // Giúp hình ảnh phủ toàn bộ vùng chứa mà không bị méo
        borderTopLeftRadius: "10px", 
        borderBottomLeftRadius: "10px",
    },
    input: {
        
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ddd",
        marginTop: "15px",
        width: "95%",
        backgroundColor: "#e9e9e9",
        fontSize: "12px",
    },
    
    buttonContainer: {
        display: "flex",
        flexDirection: "column", // Sắp xếp theo cột (Next trên, Skip dưới)
        alignItems: "center",
        gap: "10px",
        marginTop: "10px",
    },

    continueButton: {
        marginTop: "15px",
        backgroundColor: "#FF4081",
        color: "white",
        border: "none",
        
        borderRadius: "10px",
       
        fontSize: "12px",
        width: "100%", // Tăng chiều rộng để nhìn cân đối hơn
    },
    overlay: {
        position: "absolute",
        top: "18%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        textAlign: "center",
    },
    textOverlay: {
        color: "white",
        fontSize: "23px",
        fontWeight: "bold",
        padding: "10px 20px",
        
    },
    whiteButton: {
        marginTop: "5px",
        backgroundColor: "#e9e9e9",
        cursor: "pointer",
        fontSize: "14px",
        width: "100%",
    },
    icon: {
        fontWeight: "bold",
        fontSize: "16px",
    },
};

