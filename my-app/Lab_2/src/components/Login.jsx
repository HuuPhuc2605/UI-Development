import { useState, useEffect } from "react";
import img from "../assets/images/Image 72.png";
import "./Login.css";

export default function Login() {
    useEffect(() => {
        console.log("Component mounted");
    }, []);

    const handleContinue = () => {
        console.log('');
    };
    const handleWithGG = () => {
        console.log('');
    };
    const handleWithFB = () => {
        console.log('');
    };
    const handleWithAP = () => {
        console.log('');
    };

    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <div className="container">
            <div className="imageWrapper">
                <img src={img} className="image" alt="Login" />
                <div className="overlay">
                    <p className="textOverlay">
                        "Embrace the art of cooking, where flavors come alive!"
                    </p>
                </div>
            </div>

            <div className="contentWrapper">
                <h2 className="title">Login</h2>
                <p className="description">
                    Enter your email to login.
                </p>
                <input 
                    placeholder="Enter your email" 
                    onChange={handleChange} 
                    type="text" 
                    className="input" 
                />

                <div className="buttonContainer">
                    <button className="continueButton" onClick={handleContinue}>Continue</button>

                    <p className="separatorText">-----------------------------OR------------------------------</p>
                    <p className="termsText">
                        By continuing, you agree to the updated Terms of Sale, Terms of Service, and Privacy Policy.
                    </p>

                    <button className="whiteButton googleButton" onClick={handleWithGG}>
                        <span className="icon">G </span>Continue with Google
                    </button>
                    <button className="whiteButton facebookButton" onClick={handleWithFB}>
                        <span className="icon">f </span>Continue with Facebook
                    </button>
                    <button className="whiteButton appleButton" onClick={handleWithAP}>
                        🍏 Continue with Apple
                    </button>
                </div>
            </div>
        </div>
    );
}
