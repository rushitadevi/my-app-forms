import React,{Component} from 'react';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';

  class MyNav extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          filterMovie:""
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          <div className="container-fluid">
              <div>
        <Navbar style={{background:" #221f1f"}}  dark expand="md" >
          <NavbarBrand href="/">Rushi's</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link"  to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link"  to="/AddComments">Add Comments</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link"  to="/Registration" >Registration</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
          </div>
          </div>
        );
      }
  }
  
  export default MyNav;