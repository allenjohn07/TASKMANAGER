import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../navbar/Header.css'
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <img style={{width:'30px',height:'30px',marginRight:'10px'}} src="https://i.postimg.cc/pTkSdsMX/prioritize.png" alt="" />
                        <Link style={{textDecoration:"none"}} to={"/"}><Navbar.Brand to="#">Task Manager</Navbar.Brand></Link>
                    </div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        
                            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                                <li className='nav-item'>
                                    <Link className='nav-link active' aria-current="page" to="/">Home</Link></li>
                                    <li className='nav-item'>
                                    <Link className='nav-link active' aria-current="page" to="/about">About Us</Link></li>
                                    <li className='nav-item'>
                                    <Link className='nav-link active' aria-current="page" to="/tasks">Tasks</Link></li>
                                    <li className='nav-item btn-nav'>
                                    <Link className='nav-link active text-white' aria-current="page" to="/register">Register</Link></li>
                                    <li className='nav-item btn-nav'>
                                    <Link className='nav-link active text-white' aria-current="page" to="/login">Log in</Link></li>
                                    {/* <li className='nav-item btn-nav'>
                                    <Link className='nav-link active text-white' aria-current="page" to="/logout">Log out</Link></li> */}
                            </ul>                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header