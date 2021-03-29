import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import FileUpload from "./Pages/FileUpload/FileUpload";
import Home from "./Pages/Home/Home";
import RunnerEditor from "./Pages/Editors/RunnerEditor";
import ProfileCodeEditor from "./Pages/Editors/ProfileCodeEditor";
import Peep from "./Pages/Peep/Peep";
import Register from "./Pages/Register/Register.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Splash from "./Pages/Splash/Splash.jsx";
import Documentation from "./Pages/Documentation/Docs.jsx";
import "./App.css";
import {Container} from "reactstrap";

function App() {
  useEffect(() => {
  }, []);

  return (
    <Router>
      <Container fluid>
        <Route path="/" exact component={Splash} />

      </Container>
      <div>
        <Switch>
          <Route path="/FileUpload" exact component={FileUpload} />
          <Route path="/Documentation" exact component={Documentation} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Profile" exact component={Profile} />
          <Route path="/Editor" exact component={RunnerEditor} />
          <Route path="/ProfileEditor" exact component={ProfileCodeEditor} />
          <Route path="/Peep" exact component={Peep} />
          <Route path="/Register" exact component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
