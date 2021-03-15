import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "reactstrap";
import Logo from "./Components/logo/logo";
import Home from "./Pages/Home/Home";
import "./App.css";
import {Container} from "reactstrap";
function App() {

 

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
