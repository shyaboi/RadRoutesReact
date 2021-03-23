import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  NavLink,
} from "reactstrap";
import { AvailableAddOnContext } from "twilio/lib/rest/preview/marketplace/availableAddOn";
import logo from "../../assets/images/rr.png";
import fetchy from "../../Utils/Fetcher";
import Navi from "../../Components/Nav/Nav";
import jwt_decode from "jwt-decode";
let enc
const Home = (props) => {
  const [type, setType] = useState("...Waiting for file to be loaded");
  const [route, setRoute] = useState("my-rad-route");
  const [routeExists, setExitance] = useState("Availible");
  const [avail, setAvail] = useState("avail");

  let jwtEnigma = () => {
    let token = localStorage.getItem('enc')
    if(token){
    var decoded = jwt_decode(token);
    }
    else{alert("You're not authorized to view this page \n GITOUT!")}
  }

  const extChange = (e) => {
    let fileInput = e.target.files[0].name;
    let popFile = fileInput.split(".").pop();
    console.log(popFile);
    setType(popFile);
  };

  const ok = (rr) => {
    
    fetchy(`http://localhost:5000/exists/${rr}`).then(async (data) => {
      console.log(data);
      let d = data;
      if (d === false) {
        setExitance("Route Availible");
        setAvail("avail");
      }
      if (d === true) {
        setExitance("Route NOT Availible");
        setAvail("notAvail");
      }
    });
  };

  const routeChange = (e) => {
    let r = e.target.value;
    setRoute(r);
    ok(r);
  };

  useEffect(() => {
    jwtEnigma()
  }, []);

  return (
    <Container>
      <Container>
        <Navi />
      </Container>
      <Container className="pb-5 mt-5 pt-5 txt-cen ninja">
        <Form
          method="POST"
          action="http://localhost:5000/file"
          encType="multipart/form-data"
        >
          <Row className="txt-cen">
            <Col>
                <img src={logo} alt="rad routes logo" 
                height="350px"/>
            </Col>
          </Row>
          <Row className="txt-cen" xl="2" xs="1">
            <Col className="ninja p-5">
              <FormGroup>
                <Label>
                  Your Rad Route will be hosted at https://radroutes.com/{route}
                </Label>
                <Input
                  type="text"
                  name="route"
                  placeholder="my-rad-route"
                  onChange={(e) => {
                    routeChange(e);
                  }}
                />
              </FormGroup>
              <Label className={avail}>Your Route is {routeExists}</Label>
            </Col>
                    <Input hidden name='enc' value={enc}/>
            <Col className="ninja p-5">
              <FormGroup>
                <Label for="exampleFile">Upload a file for your route:</Label>
                <Input
                  type="file"
                  onChange={(e) => {
                    extChange(e);
                  }}
                  name="file"
                  id="exampleFile"
                />
                <FormText color="muted">Your File is a {type} File</FormText>
              </FormGroup>
              <FormGroup className="ninjaVanish">
                <Input type="select" name="type" id="exampleSelect">
                  <option name="type" value={type}></option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button size="lg" className="ninja mt-5">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  );
};
export default Home;
