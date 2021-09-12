import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  NavLink
} from "reactstrap";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const logo = process.env.PUBLIC_URL + "/assets/images/rad.png";



const RegiCheckEmail = (props) => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  useEffect(() => {
  }, []);

const sendVerification = ()=> {
    alert('Verification email sent \nPlease click the verification link in the email.')
}


  return (
    <Container id="logoCon" className="txt-cen shad">
      <Container>

        <Row className="mt-4">
          <Col id="logo">
            <NavLink href='/'>
            <img
             className='img-fluid'
             width='40%'
               src={logo} alt="rad routes logo"
                />
            </NavLink>
          </Col>
        </Row>
      </Container>
      <Row className="p-3 txt-cen shad radGrad rounded-pill stok">
      <Col>
          <strong>
              <h1>
                   Please check your email for verification link
                  </h1>
              </strong>
        </Col>
      </Row>
      <Row className="mr-5 ml-5 p-5 txt-cen">
      <Col>
          <Button color='primaryGrad' onClick={sendVerification}>
              Send Verification Email Again
          </Button>
        </Col>
      </Row>
      <Row className="mr-5 ml-5  pt-5 pb-2 txt-cen">
      <Col>
          <NavLink href="/Login">
              Login
              </NavLink>
        </Col>
      </Row>
      <Row className='pb-4 '>
        <Col>
          <NavLink href='/Register'>
            Register
        </NavLink>
        </Col>
      </Row>
    </Container>
  );
};
export default RegiCheckEmail;
