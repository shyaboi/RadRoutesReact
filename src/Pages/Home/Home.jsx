import React, { useEffect } from "react";
import { NavLink } from "reactstrap";
import {Container, Row, Col} from "reactstrap";
import Navi from '../../Components/Nav/Nav'

function Home() {
  useEffect(() => {
  }, []);

  return (
      <Container>
          <Container>

    <Navi/>
          </Container>
    <Container className="mt-5 pt-5 txt-cen">
    <Row>
        <Col>
        things
        </Col>
    </Row>
    </Container>
</Container>
  );
}

export default Home;