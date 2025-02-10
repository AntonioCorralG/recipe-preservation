import React from 'react';
import styled from 'styled-components';

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

interface SocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    id: 'facebook',
    icon: 'fab fa-facebook',
    label: 'Link to facebook',
    url: '#',
  },
  {
    id: 'instagram',
    icon: 'fab fa-instagram',
    label: 'Link to instagram',
    url: '#',
  },
  {
    id: 'twitter',
    icon: 'fab fa-x-twitter',
    label: 'Link to X',
    url: '#',
  },
];

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className="footer-container">
        <p>&copy; {currentYear} Heart, California</p>
        <SocialMedia>
          <ul>
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a href={link.url} aria-label={link.label}>
                  <i className={link.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </SocialMedia>
      </div>
    </FooterContainer>
  );
};

export default Footer;
