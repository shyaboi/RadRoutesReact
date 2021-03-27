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
  NavLink,
} from "reactstrap";
import logo from "../../assets/images/radroutes.png";


const Register = (props) => {

  useEffect(() => {
  }, []);

  // const alerty = ()=> {alert('Thanks for signing up! \n You will be taken to the login page now.')}
  return (
    <Container id="logoCon" className="txt-cen" fluid>
      <Container>
        <Row className="mt-5">
          <Col id="logo">
            <NavLink href='/'>

            <img src={logo} alt="rad routes logo" height="250px" />
            </NavLink>
          </Col>
        </Row>
      </Container>
      <Row className="mr-5 ml-5  p-5 txt-cen">
        <Col>
          <Form
            method="POST"
            action="http://radroutes.com/register"
            encType="multipart/form-data"
          >
            <FormGroup className="mr-sm-2 mb-sm-0 sec">
              <Label for="username" className="mr-sm-2">
                <h4>User Name</h4>
              </Label>
              <Input
                type="username"
                name="username"
                id="user"
                placeholder="IAmRad"
              />
            </FormGroup>
            <FormGroup className="mt-4 mr-sm-2 mb-sm-0 sec">
              <Label for="exampleEmail" className="mr-sm-2">
                <h4>Email</h4>
              </Label>
              <Input
                type="email"
                name="email"
                id="Email"
                placeholder="rad@radroutes.com"
              />
            </FormGroup>
            <FormGroup className="mt-4 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" className="mr-sm-2 sec">
                <h4>Password</h4>
              </Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="don't tell!"
              />
            </FormGroup>
            <Button className="mt-4" >Submit</Button>
          </Form>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col>
          <NavLink href="/Login">Login</NavLink>
        </Col>
      </Row>
    </Container>
  );
};
export default Register;
