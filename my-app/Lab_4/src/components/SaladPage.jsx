import React, { useState, useEffect } from "react";
import "./SaladPage.css";

const Lab3 = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://67ca6b86102d684575c5483b.mockapi.io/Lab4")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.log("Error:", error));
  }, []);

  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <img
          src="https://res.cloudinary.com/dkzpfo8b2/image/upload/v1742179691/Group_21_qxumlm.png"
          alt="logo"
          className="logo"
          style={{ height: "100px", width: "150px" }}
        />
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
          style={{ height: "30px", padding: "4px 12px" }}
        />
        <nav className="nav-menu">
          <button>What to cook</button>
          <button>Recipes</button>
          <button>Ingredients</button>
          <button>Occasions</button>
          <button>About Us</button>
        </nav>
        <div className="nav-right">
          <button className="recipe-box-btn">Your Recipe Box</button>
          <img
            src="https://res.cloudinary.com/dkzpfo8b2/image/upload/v1742020324/Avatar_42_klafap.png"
            alt="User Avatar"
            className="avatar"
            style={{ height: "70px", width: "70px" }}
          />
        </div>
      </header>

      {/* Main */}
      <main className="main-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3 className="filter-title">☰ FILTERS</h3>

          <div className="filter-group">
            <p className="filter-label">Type</p>
            <div className="checkbox-grid">
              {[
                "Pan-fried",
                "Stir-fried",
                "Grilled",
                "Roasted",
                "Sauteed",
                "Baked",
                "Steamed",
                "Stewed",
              ].map((item) => (
                <label key={item}>
                  <input type="checkbox" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <p className="filter-label">Time</p>
            <input
              type="range"
              min="0"
              max="60"
              className="time-range-slider"
            />
            <div className="range-labels">
              <span>30 minutes</span>
              <span>50 minutes</span>
            </div>
          </div>

          <div className="filter-group">
            <p className="filter-label">Rating</p>
            {[5, 4, 3, 2, 1].map((stars) => (
              <label key={stars} className="rating-option">
                <input type="checkbox" />
                <span className="star-line">
                  {"★".repeat(stars)}
                  {"☆".repeat(5 - stars)}
                </span>
              </label>
            ))}
          </div>

          <button className="apply-btn">Apply</button>
        </aside>

        {/* Recipes */}
        <section className="recipes-section">
          <div className="recipes-header">
            <h2>Salad ({recipes.length})</h2>
            <select className="sort-select">
              <option>A - Z</option>
              <option>Z - A</option>
            </select>
          </div>

          <div className="recipe-grid">
            {recipes.map((recipe, index) => (
              <div key={index} className="recipe-card">
                <img src={recipe.image} alt={recipe.name} />
                <div className="recipe-card-body">
                  <h3>{recipe.content}</h3>
                  <div className="card-footer">
                    <span>{recipe.minutes} minutes</span>
                    <button className="bookmark-btn"></button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            {[1, 2, 3, 4, 5, "...", 10, 11].map((page, idx) => (
              <button key={idx} className={page === 1 ? "active" : ""}>
                {page}
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="footer">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            Welcome to our website, a wonderful place to explore and learn how
            to
          </p>
          <p>cook pke a pro.</p>
          <div className="sub">
            <input
              className=" sub input"
              type="email"
              placeholder="Your email address"
            />
            <button className="sub button">Send</button>
          </div>
          <br />
          <br />
          <br />
          <div className="footer-logo">
            <img
              src="https://res.cloudinary.com/dkzpfo8b2/image/upload/v1742211442/Group_22_osdftk.png"
              alt="logo"
            />
            <span>2023 Chefify Company</span> <span>Terms of Service</span> |{" "}
            <span>Privacy Popcy</span>
          </div>
        </div>

        <div className="footer-section">
          <h3>Learn More</h3>
          <p>Our Cooks</p>
          <p>See Our Features</p>
          <p>FAQ</p>
          <br />
          <h3>Shop</h3>
          <p>Gift Subscription</p>
          <p>Send Us Feedback</p>
        </div>

        <div className="footer-section">
          <h3>Recipes</h3>
          <p>What to Cook This Week</p>
          <p>Pasta</p>
          <p>Dinner</p>
          <p>Healthy</p>
          <p>Vegetarian</p>
          <p>Vegan</p>
          <p>Christmas</p>
        </div>
      </div>
    </div>
  );
};

export default Lab3;
