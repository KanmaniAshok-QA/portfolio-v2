import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CopyRight = styled.div`
  margin-left: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  margin-right: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  margin: 0 0.5rem;
  font-size: 1.5rem;

  &:hover {
    color: #ccc;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <CopyRight>&copy; 2024 Kanmani Ashok</CopyRight>
      <SocialLinks>
        <SocialLink href="https://www.instagram.com/kanmaniashok/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/kanmaniashok/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="https://github.com/kanmaniashok" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
}

export default Footer;
