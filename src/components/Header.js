import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 1rem;
`;

function Header() {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/about">About</NavLink>
    </Nav>
  );
}

export default Header;