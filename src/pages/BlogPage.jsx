import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogWireframe from "../Assets/images/blog-wireframe.png";
const BlogPage = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>
          <i className="fa-regular fa-newspaper" /> Recipe Introduction and
          Discussion
        </h1>
        <p>
          Welcome to our blog where we discuss Mexican culinary cuisine and
          introduce the latest recipes contributed by the community.
        </p>
        <img src={BlogWireframe} />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
