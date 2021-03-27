import React, { useState, useEffect } from "react";
import { Container, NavLink, Row, Col } from "reactstrap";

import logo from "../../assets/images/radroutes.png";

const Docs = (props) => {
  return (
    <Container>
      <Row className='txt-cen'>
        <Col>
          <NavLink href='/'>
            <img src={logo} alt='rad routes logo' height='350px' />
          </NavLink>
          Docs Coming Soon
        </Col>
      </Row>
    </Container>
  );
};

export default Docs;
