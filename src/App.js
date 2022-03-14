import React, { useState, useEffect } from "react";
import {Rotas} from "./Routes/Rotas";
import { onError } from "./libs/errorLib";
import { Auth } from "aws-amplify";
import { AppContext } from "./libs/contextLib";
import { Link, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem, Card } from "react-bootstrap";
import "./App.css";

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    onLoad();
  }, []);
  
  const handleLogout = async () => {
    await Auth.signOut();

    setIsAuthenticated(false);
    navigate("/login")
  }

  const onLoad = async () => {
    try {
      await Auth.currentSession();
      setIsAuthenticated(true);
    }
    catch(err) {
      if (err !== 'No current user') {
        onError(err);
      }
    }
  
    setIsAuthenticating(false);
  }

  return (
    !isAuthenticating &&
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Cupido Online</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
          {isAuthenticated
            ?   <>
                  <LinkContainer to="/messages/new">
                    <NavItem>{"\uFF0B"}Nova Mensagem</NavItem>
                  </LinkContainer>
                  <NavItem onClick={handleLogout}>Logout</NavItem>
                </>
            : <>
                <LinkContainer to="/signup">
                  <NavItem>Cadastrar</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
              </>
          }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <Rotas />
      </AppContext.Provider>
    </div>
  );
}

export default App;