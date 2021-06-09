import React from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import Nav from "@rsuite/responsive-nav";
import { Container, Header, Content, Footer } from 'rsuite';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Couple from './Couple';
import Venue from './Venue';
import Details from './Details';
import Sac from './Sac';
import Covid from './Covid';
import Rsvp from './Rsvp'

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header>
            <Nav appearance='subtle' moreProps={{ placement: "bottomEnd" }}>
              <Nav.Item eventKey="Home" href="/" className="navbar-option navbar-brand">
                <span className="navbar-brand-desktop">LillyBelle And Marc</span>
                <span className="navbar-brand-mobile">LB &amp; M</span>
              </Nav.Item>
              <Nav.Item eventKey="Couple" href="/couple" className="navbar-option">The Couple</Nav.Item>
              <Nav.Item eventKey="Venue" href="/venue" className="navbar-option">The Venue</Nav.Item>
              <Nav.Item eventKey="Details" href="/details" className="navbar-option">Event Details</Nav.Item>
              <Nav.Item eventKey="Sac" href="/sac" className="navbar-option">SacTown</Nav.Item>
              <Nav.Item eventKey="COVID" href="/covid" className="navbar-option">COVID-19</Nav.Item>
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
              <Route exact path="/rsvp">
                <Rsvp></Rsvp>
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