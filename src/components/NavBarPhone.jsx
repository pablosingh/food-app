import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BurguerButton from './BurguerButton';
import { SignOut } from './SignOut';

export const NavBarPhone = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <Link to="/" onClick={handleClick} className={`linkClass`}>Menu</Link>
          <Link to="/cook" onClick={handleClick} className={`linkClass`}>Cocina</Link>
          <Link to="/about" onClick={handleClick} className={`linkClass`}>Acerca</Link>
          <Link to="/contact" onClick={handleClick} className={`linkClass`}>Contacto</Link>
          <SignOut className={`linkClass`} onClick={handleClick}/>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
};

const NavContainer = styled.nav`
  position: fixed;
  width: 100%;
  padding: .4rem;
  z-index: 1; 
  display: flex;
  align-items: center;
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 1.3rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: fixed;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`