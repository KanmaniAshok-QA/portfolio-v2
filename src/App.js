import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaLinkedin , FaGithub} from 'react-icons/fa';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #0a192f;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #0a192f;
  color: #64ffda;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.2rem;
  color: #ccd6f6;

  &:hover {
    color: #64ffda;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavLink = styled(Link)`
  color: ${({ $isActive }) => ($isActive ? '#64ffda' : '#ccd6f6')};
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1.1rem;

  &:hover {
    color: #64ffda;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
`;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #0a192f;
  color: #ccd6f6;
  text-align: center;
`;

const SocialLinks = styled.div`
  margin-bottom: 1rem;

  a {
    color: #ccd6f6;
    margin: 0 1rem;
    text-decoration: none;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #64ffda;
    }
  }
`;

const Copyright = styled.div`
  font-size: 0.875rem;
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #64ffda;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function NavLinkWrapper({ to, children, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavLink to={to} $isActive={isActive} onClick={onClick}>
      {children}
    </NavLink>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <AppContainer>
        <HeaderContainer>
          <Logo>Kanmani Ashok</Logo>
          <HamburgerButton onClick={toggleMenu}>☰</HamburgerButton>
          <Nav isOpen={isMenuOpen}>
            <NavLinkWrapper to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLinkWrapper>
            <NavLinkWrapper to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLinkWrapper>
            <NavLinkWrapper to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLinkWrapper>
          </Nav>
        </HeaderContainer>
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </MainContent>
        <FooterContainer>
          <SocialLinks>
            <a href="https://github.com/KanmaniAshok-QA" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kanmaniashok/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </SocialLinks>
          <Copyright>
            &copy; {new Date().getFullYear()} Kanmani Ashok
          </Copyright>
        </FooterContainer>
      </AppContainer>
    </Router>
  );
}

export default App;