import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import Nav from './Nav'

const Header = () => {
  const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    
   height:5rem
  }
`;
  return (
    <MainHeader>
      <NavLink to='/'>
        <img className='logo' src='./images/n7logofinal.png' alt="logo"></img>
      </NavLink>
      <Nav></Nav>
    </MainHeader>
  )
}

export default Header
