import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import { PersonOutline, Menu } from "@material-ui/icons";
import Logo from '../assets/images/logo.svg'

const Header = (props) => {
  const [responsiveMenu, setResponsiveMenu] = useState(false)
  
  const toggleResponsiveMenu = () => {
    setResponsiveMenu(!responsiveMenu);
  }

  return (
    <header>
        <Container maxWidth="lg" >
            <div className="navbar">
                <Link to="/" className="brand" >
                    <img src={Logo} alt="City of Vitoria" />
                </Link>
                <nav className={responsiveMenu && 'collapsed'} >
                    <ul>
                        <li>
                            <Link to='/' >Home</Link>
                        </li>
                        <li>
                            <Link to='/about' >About</Link>
                        </li>
                        <li>
                            <Link to='/places' >Places</Link>
                        </li>
                        <li className="dropdown" >
                            <a href="/" className="dropdown" >Services</a>
                            <div className="dropdown-menu" >
                              <Link to="/hotels" >Hotels & Inns</Link>
                              <Link to="/restaurants" >Restaurants</Link>
                            </div>
                        </li>
                    </ul>
                    <button type="button" onClick={props.openLoginModal} className="login">
                        <PersonOutline fontSize="large" />
                    </button>
                    <button onClick={toggleResponsiveMenu} type="button" className="btn-menu" id="btn-menu">
                        <Menu fontSize="large" />
                    </button>
                </nav>
            </div>
        </Container>
    </header>
  );
};
export default Header;
