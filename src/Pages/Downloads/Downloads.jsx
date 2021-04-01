import React, { useState, useEffect } from "react";
import { Container, NavLink, Row, Col } from "reactstrap";
import CodeBlock from "@tenon-io/tenon-codeblock";

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
          <h1>
          Mac OS cURL installer
          </h1>
          Simply enter the below command into your terminal;
          
          <CodeBlock codeString={`curl -s https://raw.githubusercontent.com/Rad-Routes/rad_routes_cli_installer/master/mac_installer.sh | bash`}/>

        </Col>
      </Row>
    </Container>
  );
};

export default Docs;
