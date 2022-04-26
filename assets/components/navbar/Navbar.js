import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import './Navbar.css';

class Navbar extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <FontAwesomeIcon icon="fa-brands fa-react" />React!
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    {this.state.clicked ?
                        <FontAwesomeIcon icon="fa-solid fa-x" /> :
                        <FontAwesomeIcon icon="fa-solid fa-bars" />}
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign up</Button>
            </nav>
        )
    }
}

export default Navbar