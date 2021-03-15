import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col, NavLink } from "reactstrap";
import Logo from "./Components/logo/logo";
import Home from "./Pages/Home/Home";

function App() {
  const [component, setComponent] = useState();

  const go =()=> {
    console.log("ok")
  }

  useEffect(() => {
  }, []);

  return (
    <Router>
      <Container fluid>
        <NavLink href='/Home'>
        <Route path="/" exact component={Logo} />
          </NavLink>
      </Container>
      <div>
        <Switch>
          <Route path="/Home" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
