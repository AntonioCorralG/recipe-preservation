import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import exampleStore from "../Assets/images/exampleMexicanStore.png";
const StorePage = () => {
  return (
    <div>
      <Header />
      <h1 className="title">
        <i className="fa-solid fa-shop"></i> Support Mexican Artisans
      </h1>
      <p>
        Our store is specifically curated to find the best Mexican artisans for
        your culinary needs.
      </p>
      <h2>Example of Store</h2>
      <p>https://verveculture.com/collections/mexican-kitchen-tools</p>
      <img src={exampleStore} />
      <Footer />
    </div>
  );
};

export default StorePage;
