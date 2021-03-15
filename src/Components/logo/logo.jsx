import React, { useState, useEffect, Suspense } from "react";
import {
Container,
Row,
Col,
NavLink,
} from "reactstrap";
import logo from '../../assets/images/radroutes.png'

const Logo = (props) => {



  useEffect(() => {
  }, []);


  return (
    <Container  id='logoCon' className="mt-5" fluid>
      <Row className="mt-5">
        <Col className="mt-5"  id='logo'>
        <img src={logo}/>
        </Col>
      </Row>
    </Container>
  
  )}
export default Logo;
