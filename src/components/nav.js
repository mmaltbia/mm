import React from 'react';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

export default class SideNavbar extends React.Component {

	render() {
		return (


        <Navbar collapseOnSelect id="sidebar-wrapper">
        	<Navbar>
        	  <Navbar.Brand>
        	    <a href="#">React-Bootstrap</a>
        	  </Navbar.Brand>
        	  <Navbar.Toggle />
        	</Navbar>
        	<Navbar.Collapse>
	            <div id="nav">
	              <NavItem eventKey={1} href="#">Link</NavItem>
	              <NavItem eventKey={2} href="#">Link</NavItem>
	              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
	                <MenuItem eventKey={3.1}>Action</MenuItem>
	                <MenuItem eventKey={3.2}>Another action</MenuItem>
	                <MenuItem eventKey={3.3}>Something else here</MenuItem>
	                <MenuItem divider />
	                <MenuItem eventKey={3.3}>Separated link</MenuItem>
	              </NavDropdown>
	            </div>
            </Navbar.Collapse>
        </Navbar>
    
		);
	}

}