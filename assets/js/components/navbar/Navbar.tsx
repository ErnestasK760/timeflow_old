import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import styled from "styled-components";

const InnerNavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 77%;
    margin: 0;
`
const NavbarWrapper = styled.nav`
    display: flex;
    width: 100%;
    top: 0;
    margin: auto;
    background-color: #2B2E4A;
    height: 131px;
    justify-content: center;
    overflow: hidden;
    z-index: 1;
`
const Logo = styled.div`
    align-self: left;
    & > h1 {
        font-family: Outfit,sans-serif;
        color: #FFFFFF;
        font-weight: 600;
        font-size: 48px;
    }
`
const RightMenu = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-self: right;
    list-style-type: none;
    margin: 0;
    padding: 0;
    & > *:hover {
        font-family: Outfit,sans-serif;
        color: #FFFFFF;
        font-weight: 600;
        font-size: 26px;
        text-decoration: none;
    }
    & > * {
        font-family: Outfit,sans-serif;
        color: #FFFFFF;
        font-weight: 600;
        font-size: 26px;
        text-decoration: none;
        padding: 13px;
    }
    & > .get-started {
        background-color: #E84545;
        border-radius: 35px;
        padding: 15px;
        padding-left: 20px;
        padding-right: 20px;
        margin: 0px;
    }
`


interface Props {

}

const Navbar: React.FC<Props> = () => {
    return (
        <NavbarWrapper>
            <InnerNavbarWrapper className="inner-navbar-wrapper">
                <Logo>
                    <h1>Timeflow</h1>
                </Logo>
                <RightMenu>
                    <NavLink className="about" to="/about">About</NavLink>
                    <NavLink className="login" to="/login">Login</NavLink>
                    <NavLink className="get-started" to="/signup">Get started</NavLink>
                </RightMenu>
            </InnerNavbarWrapper>
        </NavbarWrapper>
    );
}

export default Navbar;