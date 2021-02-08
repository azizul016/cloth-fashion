import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../image/logo/Group 33072.png';
import './MenuBar.css';

function MenuBar() {
	return (
		<>
			<Container>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand to="/home">
						<Link to="/">
							<img width="235" src={logo} alt="Cloth-Fashion" />
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav style={{ zIndex: '50' }} className="ml-auto navRight">
							<Link to="/home">Home</Link>
							<Link to="/product">Product</Link>
							<Link to="/aboutUs">About Us</Link>
							<Link to="/link">Contract US</Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</>
	);
}

export default MenuBar;
