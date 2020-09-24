import React from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import Nav from "@rsuite/responsive-nav";
import { Container, Header, Content, Footer } from 'rsuite';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import Couple from './Couple';
import Venue from './Venue';
import Details from './Details';
import Sac from './Sac';
import Covid from './Covid';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header>
            <Nav appearance='subtle' moreProps={{ placement: "bottomEnd" }}>
              <Nav.Item eventKey="Home">
                <Link to="/" className="navbar-option navbar-brand">
                  <span class="navbar-brand-desktop">LillyBelle And Marc</span>
                  <span class="navbar-brand-mobile">LB &amp; M</span>
                </Link>
              </Nav.Item>
              <Nav.Item eventKey="Couple">
                <Link to="/couple" className="navbar-option">The Couple</Link>
              </Nav.Item>
              <Nav.Item eventKey="Venue">
                <Link to="/venue" className="navbar-option">The Venue</Link>
              </Nav.Item>
              <Nav.Item eventKey="Details">
                <Link to="/details" className="navbar-option">Event Details</Link>
              </Nav.Item>
              <Nav.Item eventKey="Sac">
                <Link to="/sac" className="navbar-option">SacTown</Link>
              </Nav.Item>
              <Nav.Item eventKey="COVID">
                <Link to="/covid" className="navbar-option">COVID-19</Link>
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
              <Route exact path="/details">
                <Details></Details>
              </Route>
              <Route exact path="/sac">
                <Sac></Sac>
              </Route>
              <Route exact path="/covid">
                <Covid></Covid>
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