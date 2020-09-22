import React from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import { Navbar } from 'rsuite';
import { Container, Header, Content, Footer } from 'rsuite';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header>
            <Navbar appearance='subtle'>
              <Navbar.Header>
                <Link to="/" className="navbar-brand">LillyBelle And Marc</Link>
              </Navbar.Header>
            </Navbar>
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