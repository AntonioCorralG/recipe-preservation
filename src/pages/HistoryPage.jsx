import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const HistoryPage = () => {
  return (
    <div>
      <Header />
      <div class="container">
      <h1 class="title">
        <i class="fa-solid fa-book-open-reader"></i> History
      </h1>
      <p>
        Dive deeper into the birth of the culinary tradition birthed by Mexico. By Region and with videos.
      </p>
      <div class="rec-container"></div>
    </div>
      <Footer />
    </div>
  );
};

export default HistoryPage;
