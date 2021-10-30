import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import logo from "../logo.svg";

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products Yan yan Irawan No. Prakerja 3219-2021-7228-0653
                        </Link>
                    </li>
                </ul>
               

            </NavWrapper>
        );
    }
}

export default Navbar;

const NavWrapper = styled.nav`
background : var(--mainBlue);
color: var(--mainWhite);
.nav-link{
	color: var(--mainWhite) !important;
	font-size: 1.3rem;
	text-transform:capitalize;
}

`;

