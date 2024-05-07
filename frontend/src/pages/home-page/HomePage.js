import React from "react";
import NavBar from "../../components/navbar/NavBar";
import "./home.styles.css";

function HomePage() {
  return (
    <div className="home-page-container">
      <NavBar />
      <span>This is the home page</span>
    </div>
  );
}

export default HomePage;
