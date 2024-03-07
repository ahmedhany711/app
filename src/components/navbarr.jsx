// import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { BsCart } from "react-icons/bs";
import { IoMdEye } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
function NAV() {
    const cart = useSelector(state => state.cart);
    const saved = useSelector(state => state.save);

    return (
        <>
            <div className="relative  w-full h-20">
                <Navbar
                    expand="lg"
                    className=" fixed  bg-gray-50 h-20  w-full z-10 top-0 mb-8 "
                >
                    <Container className="mt-1  items-center">
                        <Link to="/" className="navbar-brand text-gray-600">
                            CartApp
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav ">
                            <Nav className="ml-auto items-center ">
                                <Link to="/" className="nav-link mr-10 text-gray-600">
                                    Home
                                </Link>
                                <Link to="/" className="nav-link mr-10 text-gray-600">
                                    Products
                                </Link>
                                <Link to="/cart" className=" relative nav-link mr-10">
                                    <BsCart className="text-2xl" />  <div className="absolute -mt-9 -right-2">{cart.length}</div>
                                </Link>
                                <Link to="/saved" className=" relative nav-link mr-10">
                                    <FaHeart className="text-2xl fill-red-600 " />  <div className="absolute -mt-9 -right-2">{saved.length}</div>
                                </Link>
                                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default NAV;
