import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import FileUpload from "./Pages/FileUpload/FileUpload";
import Home from "./Pages/Home/Home";
import Editor from "./Pages/Editor/Editor";
import Peep from "./Pages/Peep/Peep";
import Register from "./Pages/Register/Register.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import "./App.css";
import {Container} from "reactstrap";

function App() {
  useEffect(() => {
  }, []);

  return (
    <Router>
      <Container fluid>
        <Route path="/" exact component={Login} />
      </Container>
      <div>
        <Switch>
          <Route path="/FileUpload" exact component={FileUpload} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Profile" exact component={Profile} />
          <Route path="/Editor" exact component={Editor} />
          <Route path="/Peep" exact component={Peep} />
          <Route path="/Register" exact component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
