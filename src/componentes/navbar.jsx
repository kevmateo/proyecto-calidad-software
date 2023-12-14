import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { AiFillFire } from "react-icons/ai";
import './navbar.css';

function NavBar(props) {

  const handlerToggleDarkMode = () => {
    props.toggleDarkMode();
    const body = document.body;
    if (props.darkMode) {
      body.classList.remove('dark-theme');
    } else {
      body.classList.add('dark-theme');
    }
  }

  return (
    <Navbar collapseOnSelect id={props.id} className="bg-body-tertiary" data-bs-theme={props.darkMode ? 'dark' : 'light'} style={{ position: 'fixed', width: '100%', zIndex: '1000' }} >
      <Container >
        <Navbar.Brand style={{ fontFamily: 'Berkshire Swash, cursive' }} ><AiFillFire size={30} /><p style={{ margin: '0' }}>Innovatech Solutions</p></Navbar.Brand>
        <Nav>
          <Nav.Link href="https://github.com/kevmateo/proyecto-calidad-software" target='_blank' rel='noopener noreferrer'>
            <FaGithub size={24} />
          </Nav.Link>
          <Button style={{ background: 'transparent', border: 'none' }} onClick={handlerToggleDarkMode}>
            {props.darkMode ? <MdDarkMode size={20} style={{ color: 'white' }} /> : <CiLight size={24} style={{ color: 'black' }} />}
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;