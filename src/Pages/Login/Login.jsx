import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink
} from "reactstrap";
import logo from "../../assets/images/radroutes.png";
import { useJwt } from "react-jwt";

const token = "secret";


const Logo = (props) => {
  const { decodedToken, isExpired } = useJwt(token);

  useEffect(() => {
    console.log(decodedToken)
    console.log(isExpired)
  }, []);

  return (
    <Container id="logoCon" className="txt-cen" fluid>
      <Container>

      <Row className="mt-4">
        <Col id="logo">
          <img src={logo} alt="rad routes logo" height='350px' />
        </Col>
      </Row>
      </Container>
      <Row className="mr-5 ml-5  p-5 txt-cen">
        <Col>
      <Form
      method="POST"
      action="http://localhost:5000/login"
      encType="multipart/form-data"
      >
        <FormGroup className="mr-sm-2 mb-sm-0 sec">
          <Label for="exampleEmail" className="mr-sm-2">
         <h4>
            Email
         </h4>
          </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="something@idk.cool"
          />
        </FormGroup>
        <FormGroup className="mt-4 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2 sec">
            <h4>
            Password
            </h4>
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="don't tell!"
          />
        </FormGroup>
        <Button className='mt-4'>Submit</Button>
      </Form>
        </Col>
      </Row>
      <Row className='pb-4'>
        <Col>
        <NavLink href='/Register'>
        Register
        </NavLink>
        </Col>
      </Row>
    </Container>
  );
};
export default Logo;
