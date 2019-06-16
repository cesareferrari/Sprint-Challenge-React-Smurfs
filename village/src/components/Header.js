import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AppName = styled.h1`
  color: #109FDB;
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 10px 20px;
  background-color: white;
`;

const NavWrapper = styled.nav`
  a {
    display: inline-block;
    margin: 0 10px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1px;
    color: #0D76A2;
    font-weight: bold;
    font-size: .9rem;

    &:hover {
      color: #065B7E;
    }
  }
`;


const Header = () => {
  return(
    <HeaderWrapper>
      <AppName>Smurf Village</AppName>
      <NavWrapper>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/smurf-form">Add Smurf</NavLink>
      </NavWrapper>
    </HeaderWrapper>
  )
}

export default Header;
