import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BlogPage from "./pages/BlogPage";
import ContributePage from "./pages/ContributePage";
import DonatePage from "./pages/DonatePage";
import HistoryPage from "./pages/HistoryPage";
import StorePage from "./pages/StorePage";
import "@fortawesome/fontawesome-free/css/all.css";
import GlobalStyle from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contribute" element={<ContributePage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/store" element={<StorePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
