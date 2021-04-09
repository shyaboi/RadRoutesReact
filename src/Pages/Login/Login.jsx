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




const Login = (props) => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  useEffect(() => {
  }, []);

  const postForm = async () => {
      let bod = JSON.stringify({
        'email': email,
        'password': pass,
      })
      axios.post('https://radroute.run/login', bod)
      .then(function (response) {
        let rData = response.data
        let authed = response.data.authed
        let enc = response.data.enc
        if(authed=='1'){
          console.log(authed,enc)
          localStorage.setItem('enc', enc)

          history.push("/Home");

        }else{
          alert(rData)
        }

      })
      .catch(function (error) {
        console.log(error);
      });
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
      <Row className="mr-5 ml-5  p-5 txt-cen">
        <Col>
          <FormGroup className="mr-sm-2 mb-sm-0 sec">
            <Label for="exampleEmail" className="mr-sm-2">
              <h4>
                Email
         </h4>
            </Label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="Email"
              placeholder="rad@radroutes.com"
            />
          </FormGroup>
          <FormGroup className="mt-4 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2 sec">
              <h4>
                Password
            </h4>
            </Label>
            <Input
              onChange={(e) => setPass(e.target.value)}
              type="password"
              name="password"
              id="Password"
              placeholder="secret , shh don't tell anyone"
            />
          </FormGroup>
          <Button className='mt-4'
            onClick={postForm}
            block
            >
              Submit
            </Button>
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
export default Login;
