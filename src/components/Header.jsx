import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import { PersonOutline, Menu } from "@material-ui/icons";
import Logo from '../assets/images/logo.svg'

const navLinks = [
  { title: `Home`, path: `/`, exact: true },
  { title: `About`, path: `/about` },
  { title: `Places`, path: `/places` },
];

const Header = () => {

  return (
    <header>
        <Container maxWidth="lg" >
            <div className="navbar">
                <Link to="/" className="brand" >
                  <img src={Logo} alt="City of Vitoria" />
                </Link>
                <nav>
                    <ul>
                      {navLinks.map(({ title, path }) => (
                          <li className="active">
                            <Link to={path} >
                              {title}
                            </Link>
                          </li>
                        ))}
                        <li className="dropdown" >
                            <a href="#" className="dropdown" >Services</a>
                            <div className="dropdown-menu" >
                              <Link to="/hotels" >Hotels & Inns</Link>
                              <Link to="/restaurants" >Restaurants</Link>
                            </div>
                        </li>
                    </ul>
                    <a href="#" onclick="showModal('login-modal');" className="login">
                      <PersonOutline fontSize="medium" />
                    </a>
                    <a href="#" className="btn-menu" id="btn-menu">
                      <Menu fontSize="medium" />
                    </a>
                </nav>
            </div>
        </Container>
    </header>
  );
};
export default Header;
