import React, {useState, useEffect} from "react";
import "./Chefity.css";
 const Chefity = () => {

    const[recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("https://67ca6b86102d684575c5483b.mockapi.io/Lab4")
        .then((response) => response.json())
        .then((data) => {
            console.log("Du lieu mon an:",data);
            setRecipes(data);
        })
        .catch((error) => console.log("Error: ", error));
    }, []);

    return(
        <div className="container">
            <div className="header">
                
                    <img src="https://res.cloudinary.com/dkzpfo8b2/image/upload/v1742179691/Group_21_qxumlm.png" alt="logo" 
                        style={{width:"200px", height: "100px"}}/>
                  

                <div>
                    <input type="text" placeholder="What would you like to cook?" />
                </div>
                <div className="button">
                    <btn>What to cook</btn>
                    <btn>Recipes</btn>
                    <btn>Ingredients</btn>
                    <btn>Occasions</btn>
                    <btn>About Us</btn>
                </div>

                <button className="box">Your Recipe Box</button>
                    <img src="https://res.cloudinary.com/dkzpfo8b2/image/upload/v1742020324/Avatar_42_klafap.png"
                    alt ="avatar" style={{height: "100px", width: "100px"}}/>
            
                </div>
                



                <h1>Emma Gonzalez's Recipe Box</h1>
                <div className="main-avatar">
                <img src="https://res.cloudinary.com/dkzpfo8b2/image/upload/v1742020324/Avatar_42_klafap.png"
                    alt ="avatar"/>
                
                <p className="main-text">
                        Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at
                        The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks
                        and food publications. Originally from East Los Angeles, Emma now resides in New York City,
                        where she explores a wide range of culinary delights.
                    </p>
                    </div>
                    <div className="main-button">
                    <button className="subscribe-btn">6.5k Subscribes</button>
                    <button className="share-btn">Share</button>
             </div>
                <div className="main-grid">
                    {recipes.map((recipe)=>(
                        <div key={recipe.id} className="main-card">
                            <img src={recipe.image} alt={recipe.content} className="main-image" />
                            <div className="main-info">
                                <h3>{recipe.content}</h3>
                                <p>{recipe.minutes} minutes</p>
                                <div className="main-icon">
                                     <img src="https://res.cloudinary.com/dkzpfo8b2/image/upload/v1742202824/image.psd_1_nmyohw.png"
                                     alt ="avatar"/>
                                </div>  
                            </div>  
                        </div>  
                        
                    ))}
                </div>   
                <div className="footer">
                    <div className="footer-content">
                        <div className="footer-section about">
                            <h3>About Us</h3>
                            <p>
                            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
                            </p>
                            <div className="sub">
                                <input type="email" placeholder="Your email address" />
                                <button>Send</button>
                                
                            </div>
                            <div className="footer-logo">
                            <img src="https://res.cloudinary.com/dkzpfo8b2/image/upload/v1742211442/Group_22_osdftk.png"
                            alt="logo" />
                        <span>2023 Chefify Company</span> <span>Terms of Service</span> | <span>Privacy Policy</span>
                        </div>
                        
                        </div>   
                        <div className="footer-section">
                            <h3>Learn More</h3>
                            <ul>
                                <li>Our Cooks</li>
                                <li>See Our Features</li>
                                <li>FAQ</li>
                            </ul>
                            <h3>Shop</h3>
                            <ul>
                                <li>Gift Subscription</li>
                                <li>Send Us Feedback</li>
                            </ul>
                        </div>
                    
                        <div className="footer-section">
                            <h3>Recipes</h3>
                            <ul>
                                <li>What to Cook This Week</li>
                                <li>Pasta</li>
                                <li>Dinner</li>
                                <li>Healthy</li>  
                                <li>Vegetarian</li>
                                <li>Vegan</li>   
                                <li>Christmas</li>  
                            </ul>
                        </div>
                     </div>
                     
    </div>
    </div>
    )
}
export default Chefity;