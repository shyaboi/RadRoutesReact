import React, { useState, useEffect } from "react";
import { Container, NavLink, Row, Col } from "reactstrap";

import logo from "../../assets/images/radroutes.png";

const Docs = (props) => {
  return (
    <Container>
      <Row className='txt-cen'>
        <Col>
          <NavLink href='/'>
          <img
             className='img-fluid'
             width='80%'
               src={logo} alt="rad routes logo"
                />
          </NavLink>
          Docs Coming Soon
        </Col>
      </Row>
    </Container>
  );
};

export default Docs;
