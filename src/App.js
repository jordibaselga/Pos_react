import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaProductos from './components/ListaProductos';
import Comanda from './components/Comanda';
import { Navbar, Container, Nav } from 'react-bootstrap'
//import QRCode from "react-qr-code";

function App() {

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="http://localhost:3000/">MENU</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Bebidas" onClick={() => ReactDOM.render(<ListaProductos keyword={'All / Consumable / Bebidas'} />, document.getElementById('main'))}>PARA BEBER</Nav.Link>
              <Nav.Link href="#Comida" onClick={() => ReactDOM.render(<ListaProductos keyword={'All / Saleable / PoS / Food'} />, document.getElementById('main'))}>PARA COMER</Nav.Link>
              <Nav.Link href="#Comanda" onClick={() => ReactDOM.render(<Comanda />, document.getElementById('main'))}>COMANDA</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className="App-section">
        <div className='row' id='main'>
          {/* <QRCode value={<ListaProductos keyword={keyword}/>} size={256} bgColor="#282c34" fgColor="#fff" level="H" /> */}
          <div id="bienvenida">
            <h3 id="bienvenida-titulo">BIENVENIDO ELIGE TU PEDIDO</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
