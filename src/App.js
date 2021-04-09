import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import FileUpload from "./Pages/FileUpload/FileUpload";
import Home from "./Pages/Home/Home";
import RunnerEditor from "./Pages/Editors/RunnerEditor";
import Peep from "./Pages/Peep/Peep";
import Register from "./Pages/Register/Register.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Splash from "./Pages/Splash/Splash.jsx";
import Documentation from "./Pages/Documentation/Docs.jsx";
import Downloads from "./Pages/Downloads/Downloads.jsx";
import RegiCheckEmail from "./Pages/RegiEmailCheck/RegiCheckEmail";
import EmailVerified from "./Pages/EmailVerified/EmailVerified";
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
          <Route path="/Downloads" exact component={Downloads} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Profile" exact component={Profile} />
          <Route path="/Editor" exact component={RunnerEditor} />
          <Route path="/Peep" exact component={Peep} />
          <Route path="/Register" exact component={Register} />
          <Route path="/Register/EmailCheck" exact component={RegiCheckEmail} />
          <Route path="/Register/EmailVerified" exact component={EmailVerified} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
