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
import logo from "../../assets/images/rr.png";
const Home = (props) => {
  const [type, setType] = useState("...Waiting for file to be loaded");
  const [route, setRoute] = useState("my-rad-route");

  const extChange = (e) => {
    let fileInput = e.target.files[0].name;
    console.log(fileInput);
    let popFile = fileInput.split(".").pop();
    setType(popFile);
  };
  const routeChange = (e) => {
    let r = e.target.value;
    setRoute(r);
  };

  useEffect(() => {}, []);

  return (
    <Container className="pb-5 txt-cen ninja">
      <Form
        method="POST"
        action="http://localhost:5000/file"
        encType="multipart/form-data"
      >
        <Row className="txt-cen">
          <Col>
            <NavLink href="/">
              <img src={logo} alt="rad routes logo" />
            </NavLink>
          </Col>
        </Row>
        <Row className="txt-cen" xl="2" xs='1'>
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
            <Button size='lg' className='ninja mt-5'>Submit</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default Home;
