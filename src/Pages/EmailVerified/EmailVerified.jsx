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
import logo from "../../assets/images/radroutes.png";
import axios from 'axios';
import { useHistory } from "react-router-dom";




const EmailVerified = (props) => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  useEffect(() => {
  }, []);

const sendVerification = ()=> {
    alert('Verification email sent \nPlease click the verification link in the email.')
}


  return (
    <Container id="logoCon" className="txt-cen" fluid>
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
      <Container  className="p-5 m-5 txt-cen" fluid>
      <Row className="p-3 m-5 txt-cen shad raddGrad rounded-pill stok" >
      <Col>
      <NavLink href='https://radroutes.com/Login' >
          <strong>
              <h1>
                   Your email has been verified!
                  </h1>
                  <h2>Click here to login</h2>
              </strong>
      </NavLink>
        </Col>
      </Row>
      </Container>
    </Container>
  );
};
export default EmailVerified;
