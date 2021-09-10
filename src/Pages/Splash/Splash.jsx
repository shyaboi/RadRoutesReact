import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, NavLink, Fade } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

const logo = process.env.PUBLIC_URL + "/assets/images/radroutes.png";

const Splash = (props) => {
  const history = useHistory();

  const checkAuth = () => {
    let token = localStorage.getItem("enc");
    if (token) {
      console.log("authed before");
      history.push("/Home");
    }
  };

  useEffect(() => {
    checkAuth()
  }, []);


  return (
    <Container id='logoCon' className='txt-cen shad'>
      <Container>
        <Row className='mt-4'>
          <Col id='logo'>
            <img
              className='img-fluid'
              width='40%'
              src={logo} alt="rad routes logo"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Fade>
              <NavLink href='/Login'>
                <Button className='m-2 p-3 shad' size='lg' color='primary' block>
                  Login
                </Button>
              </NavLink>
            </Fade>
            <Fade>
              <Fade>
                <NavLink href='/Register'>
                  <Button className='m-2 p-3 shad' size='lg' color='primaryGrad' block>
                    Register
                  </Button>
                </NavLink>
              </Fade>
              <NavLink href='https://docs.radroutes.com/'>
                <Button
                  className='m-2 p-3 shad'
                  size='lg'

                  color='secondary'
                  block
                >
                  Documentation
                </Button>
              </NavLink>
            </Fade>
            <Fade>
              <NavLink href='https://docs.radroutes.com/Prerequisites#rad-route-runner'>
                <Button className='m-2 p-3 shad' size='lg' color='secondaryGrad' block>
                  Downloads
                </Button>
              </NavLink>
            </Fade>
          </Col>
        </Row>
      </Container>
      <Row className='mr-5 ml-5  p-5 txt-cen'></Row>
    </Container>
  );
};
export default Splash;
