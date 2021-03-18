import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "reactstrap";
import Logo from "./Components/logo/logo";
import FileUpload from "./Pages/FileUpload/FileUpload";
import Home from "./Pages/Home/Home";
import Editor from "./Pages/Editor/Editor";
import Peep from "./Pages/Peep/Peep";
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
          <Route path="/FileUpload" exact component={FileUpload} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Editor" exact component={Editor} />
          <Route path="/Peep" exact component={Peep} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
