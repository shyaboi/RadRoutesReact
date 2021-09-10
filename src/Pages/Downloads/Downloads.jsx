import React, { useState, useEffect } from "react";
import { Container, NavLink,Button, Row, Col } from "reactstrap";
import CodeBlock from "@tenon-io/tenon-codeblock";

// import logo from "../../assets/images/radroutes.png";

const Docs = (props) => {
  return (
    <Container className="txt-cen mt-4 p-4 shad">
      <Row className="txt-cen">
        <Col>
          <NavLink href="/">
            <img
              className="img-fluid"
              width="30%"
              src={process.env.PUBLIC_URL + "/assets/images/radroutes.png"}
              alt="rad routes logo"
            />
          </NavLink>
        </Col>
      </Row>
      <Row>
        <Col className='shad radGrad p-1 mb-3 txt-cen rounded-pill stok'>
          <h1>Downloads</h1>
        </Col>
      </Row>
      <Row className="txt-cen mt-3 p-4 shad">
        <Col>
          <h3>Download Mac app installer</h3>
          <a href="https://radroute.run/downloads/maczip" download>
              <Button color='primary'>

          Click this button to download the mac .app Installer zip file
              </Button>
          </a>
        </Col>
      </Row>
      <Row className="txt-cen mt-4 p-4 shad">
        <Col>
          <h1>Mac OS cURL installer</h1>
          Simply enter the below command into your terminal;
          <CodeBlock
            codeString={`curl -s https://raw.githubusercontent.com/Rad-Routes/rad_routes_cli_installer/master/mac_installers/auto_mac_installer.sh | bash`}
          />
          The code above will download the R.A.D. Routes installer shell script, and then execute in bash.
        </Col>
      </Row>

    </Container>
  );
};

export default Docs;
