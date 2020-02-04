import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class NavBarWild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      navBarSwitch: false
    };
    this.toggle = this.toggle.bind(this);
    console.log(this.state.navBarSwitch);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleSign = () => {
    const token = localStorage.getItem("token");
    const navBarSwitch = this.state.navBarSwitch;
    this.setState({
      navBarSwitch: navBarSwitch ? false : true
    });
    console.log(token);
  };

  render() {
    const navBarSwitch = this.state.navBarSwitch;
    if (!navBarSwitch) {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
              <img alt="Logo" src="https://i.postimg.cc/JzMM2v9K/logo192.png" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/FAQ">FAQ</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Contact">Nous contacter</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Connexion">Connexion</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
              <img alt="Logo" src="https://i.postimg.cc/JzMM2v9K/logo192.png" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/Concert">Concert</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Favori">FAV</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/FAQ">FAQ</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Contact">Nous contacter</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Connexion">Déconnexion</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
}

export default NavBarWild;
