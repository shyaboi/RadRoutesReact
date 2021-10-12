import React, { useEffect,useState } from "react";
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

import Spiny from '../../Components/Spinner/Spinner'

const logo = process.env.PUBLIC_URL + "/assets/images/radroutes.png";

const Register = (props) => {

  const [buttonState, setButtonState] = useState("Register");

  const spinUp = () => {

    // document.querySelector('.loginSpiny').style.display = "block"
    setButtonState(<Spiny />)
  }
  useEffect(() => {
  }, []);

  // const alerty = ()=> {alert('Thanks for signing up! \n You will be taken to the login page now.')}
  return (
    <Container id="logoCon" className="txt-cen shad">
      <Container>
        <Row className="mt-5">
          <Col id="logo">
            <NavLink href='/'>
              <img
                className='img-fluid'
                width='30%'
                src={logo} alt="rad routes logo"
              />
            </NavLink>
          </Col>
        </Row>
      </Container>
      <Row className="mr-5 ml-5  p-5 txt-cen">
        <Col>
          <Form
            method="POST"
            action="https://radroute.run/register"
            encType="multipart/form-data"
          >
            <FormGroup className="mr-sm-2 mb-sm-0 sec">
              <Label for="username" className="mr-sm-2">
                <h4>User Name</h4>
              </Label>
              <Input
                className='shad'
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
                className='shad'
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
                className='shad'
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Password"
              />
            </FormGroup>
            <Button className="mt-5 shad" block onSubmit={spinUp}>
              {buttonState}
              </Button>
          </Form>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col>
          <NavLink href="/Login" className='regiLoginTiny'>Login</NavLink>
        </Col>
      </Row>
    </Container>
  );
};
export default Register;

setTimeout(() => {

}, 4000);