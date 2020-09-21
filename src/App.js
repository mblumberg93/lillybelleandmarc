import React from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import { Navbar } from 'rsuite';
import { Container, Header, Content, Footer } from 'rsuite';

function App() {
  return (
    <div className="App">
      <Container>
        <Header>
          <Navbar appearance='subtle'>
            <Navbar.Header>
              <a href="#" className="navbar-brand">
                LillyBelle And Marc
              </a>
            </Navbar.Header>
          </Navbar>
        </Header>
        <Content>
          <div className="main-info">
            <div className="main-info-title">The Wedding Of</div>
            <div className="main-info-title">LillyBelle Deer and Marc Blumberg</div>
            <div className="main-info-title">May 22, 2021 at 6pm</div>
            <div className="main-info-title">Heringer Estates - Clarksburg, CA</div>
            <div className="main-info-subtitle">Details Coming Soon...</div>
          </div>
        </Content>
        <Footer>
        </Footer>
      </Container>
    </div>
  );
}

export default App;