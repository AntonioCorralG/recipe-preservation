import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const ContributePage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="title">
          <i className="fa-regular fa-paper-plane"></i> Contribute Recipes
        </h1>
        <div className="rec-container">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeliL-xJVhXdUf7s-DYwGBHso6Ow7-3wdHNfquySpg-ENR-eA/viewform?embedded=true"
            width="1000"
            height="600"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContributePage;
