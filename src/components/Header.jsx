import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Assets/images/h2hlogo.png';

const HeaderContainer = styled.header`
  background-color: #f1f1f1;
  padding: 1em;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  ul li {
    margin-left: 2em;
  }

  ul li:first-child {
    margin-left: 0;
  }

  ul li a {
    text-decoration: none;
    color: black;
    padding: 0.5em 1em;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  ul li a:hover {
    background-color: #681e1e;
    color: white;
  }

  ul li a:active {
    background-color:  #e81393;
    color: white;
  }
`;

const LogoImg = styled.img`
  height: 75px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoImg src={Logo} alt="logo for website heart to hearth"/>
      <Nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contribute">Contribute</a></li>
          <li><a href="/history">History</a></li>
          <li><a href="/store">Store</a></li>
          <li><a href="/donate">Donate</a></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
