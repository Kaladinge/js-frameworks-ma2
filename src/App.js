import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import MusicDetail from './components/detail/MusicDetail';
import styled from "styled-components"

const BrandName = styled.span`
  color: yellow;
  font-size: 30px;
`

function App() {
  return (
    <Router>
      <Navbar expand="lg" className="p-4 bg-dark navbar-dark">
        <Container>
          <NavLink to="/" className="text-decoration-none">
            <Navbar.Brand><BrandName>The Music Page</BrandName></Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-5">
              <NavLink to="/" className="nav-link mx-auto">Home</NavLink>
              <NavLink to="/contact" className="nav-link mx-auto">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/detail/:id" element={<MusicDetail />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
    </Router>
  )
}

export default App