import React from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import { Navbar } from 'rsuite';
import Nav from "@rsuite/responsive-nav";
import { Container, Header, Content, Footer } from 'rsuite';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header>
            <Nav appearance='subtle' moreProps={{ placement: "bottomEnd" }}>
              <Nav.Item eventKey="Home">
                <Link to="/" className="navbar-brand">LillyBelle And Marc</Link>
              </Nav.Item>
              <Nav.Item eventKey="Home">
                <Link to="/" className="navbar-brand">People</Link>
              </Nav.Item>
              <Nav.Item eventKey="Home">
                <Link to="/" className="navbar-brand">Venue</Link>
              </Nav.Item>
              <Nav.Item eventKey="Home">
                <Link to="/" className="navbar-brand">Logistics</Link>
              </Nav.Item>
              <Nav.Item eventKey="Home">
                <Link to="/" className="navbar-brand">COVID</Link>
              </Nav.Item>
            </Nav>
            </Header>
          <Content>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
            </Switch>
          </Content>
          <Footer>
          </Footer>
        </Container>
      </Router>
    </div>
  );
}

export default App;