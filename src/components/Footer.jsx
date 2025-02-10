import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #ffffff;
  color: #000000;
  padding: 1em;
  text-align: center;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
`;

const SocialMedia = styled.div`
  margin-top: 1em;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul li {
    margin: 0 1em;
  }

  ul li a {
    text-decoration: none;
    color: #e85d13;
    font-size: 1.5em;
  }

  ul li a:hover {
    color: #e81393;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-container">
        <p>&copy; 2024 Heart, California</p>
        <SocialMedia>
          <ul>
            <li>
              <a href="#" aria-label="Link to facebook">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Link to instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" aria-label="Link to X">
                <i className="fab fa-x-twitter"></i>
              </a>
            </li>
          </ul>
        </SocialMedia>
      </div>
    </FooterContainer>
  );
};

export default Footer;
