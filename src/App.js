import React from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import Nav from "@rsuite/responsive-nav";
import { Container, Header, Content, Footer } from 'rsuite';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import Couple from './Couple';
import Venue from './Venue';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header>
            <Nav appearance='subtle' moreProps={{ placement: "bottomEnd" }}>
              <Nav.Item eventKey="Home">
                <Link to="/" className="navbar-option navbar-brand">LillyBelle And Marc</Link>
              </Nav.Item>
              <Nav.Item eventKey="Couple">
                <Link to="/couple" className="navbar-option">The Couple</Link>
              </Nav.Item>
              <Nav.Item eventKey="Venue">
                <Link to="/venue" className="navbar-option">The Venue</Link>
              </Nav.Item>
              <Nav.Item eventKey="Details">
                <Link to="/" className="navbar-option">Event Details</Link>
              </Nav.Item>
              <Nav.Item eventKey="Sac">
                <Link to="/" className="navbar-option">SacTown</Link>
              </Nav.Item>
              <Nav.Item eventKey="COVID">
                <Link to="/" className="navbar-option">COVID-19</Link>
              </Nav.Item>
            </Nav>
            </Header>
          <Content>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/couple">
                <Couple></Couple>
              </Route>
              <Route exact path="/venue">
                <Venue></Venue>
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