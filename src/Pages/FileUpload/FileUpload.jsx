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
} from "reactstrap";
import axios from 'axios';
import Navi from "../../Components/Nav/Nav";

const logo = process.env.PUBLIC_URL + "/assets/images/radroutes.png";

let enc
const Home = (props) => {
  const [type, setType] = useState("...Waiting for file to be loaded");
  const [route, setRoute] = useState('');
  const [routeExists, setExitance] = useState("Availible");
  const [avail, setAvail] = useState("avail");
  const [file, setFile] = useState();

  let jwtEnigma = () => {
    let token = localStorage.getItem('enc')
    if (token) {
      enc = token
    }
    else { console.log("You're not supposed to be here...") }
  }

  const extChange = (e) => {
    let fileInput = e.target.files[0].name;
    let popFile = fileInput.split(".").pop();
    setType(popFile);
    let fil = e.target.files[0]
    setFile(fil)
  };

  const ok = (rr) => {
    axios.get(`https://radroute.run/exists/${rr}`)
    .then(function (data) {
      let d = data.data;
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

  const submit = async () => {
    if(avail==='avail'){
    var formData = new FormData();
    formData.append("file", file);
    formData.append("route", route);
    formData.append("type", type);
    formData.append("enc", enc);
    axios.post('https://radroute.run/file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }).then(function (response) {
      let rData = response
      localStorage.removeItem('enc')
      localStorage.setItem('enc', rData.data)
      setFile('')
      setRoute('')
      alert(`File Uploaded\nCheck your profile, or peep some code`)
    })
  
  }if (avail==='notAvail') {
      alert(`Please choose another route, \n ${route} is taken`)
      return
    }
    if (route==='') {
      alert('Please enter a valid route. \n Your route field is currently blank')
      return
    }
  }

  useEffect(() => {
    jwtEnigma()
  }, []);

  return (
    <Container>
      <Container>
        <Navi />
      </Container>
      <Container className="pb-5 mt-5 pt-5 txt-cen ninja">
          <Row className="txt-cen">
            <Col>
              <img
             className='img-fluid'
             width='40%'
               src={logo} alt="rad routes logo"
                />
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
              <Button size="lg" onClick={submit} className="ninja mt-5">
                Submit
              </Button>
            </Col>
          </Row>
      </Container>
    </Container>
  );
};
export default Home;
