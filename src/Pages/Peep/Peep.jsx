import React, { useState, useEffect, Suspense } from "react";

import { Container, Row, Col } from "reactstrap";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
} from "reactstrap";
import Navi from "../../Components/Nav/Nav";
import fetchy from "../../Utils/Fetcher";

function Peep() {
  const [allRoutes, setAllRoutes] = useState([]);
  const [trunx, setTrunx] = useState("");

  const data = (props) => {
    fetchy("http://localhost:5000/all").then(async (data) => {
      console.log(data);
      let d = data;
      setAllRoutes(d);
    });
  };

  useEffect(() => {
    data();
    setTrunx("trunc");
  }, []);

  const tronk = (e) => {
    console.log(e.target.className);
    if (e.target.className === "trunc") {
      e.target.className = "notTrunc";
      console.log(trunx);
    } else {
      e.target.className = "trunc";
      //   setTrunx('notTrunc');
      console.log(trunx);
    }
  };

  return (
    <Container fluid>
      <Container>
        <Navi />
      </Container>
      <Container className="mt-5 pt-5 txt-cen " fluid>
        <Row>
          <Col className="shad radGrad p-3 rounded-pill stok">
            <h1>Peep other users code and routes</h1>
          </Col>
        </Row>
        <Row xs="1" xl="2">
          {allRoutes.map((fl) => {
            return (
              <Row className="p-5 mt-5 ">
                <Col>
                  <Card body>
                    <Row className="d-flex align-items-center shad p-3 mr-5 ml-5">
                <Col>
                <img src={fl.user_avatar} className='rndNav' height='70px' width='75px' alt=""/>
                </Col>
                      <Col>
                <CardTitle>
                        <strong>
                          Uploaded by: {fl.user_created}
                        </strong>
                </CardTitle>
                </Col>
                </Row>
                    <CardBody>
                      <Row>
                        <Col>
                          <strong>Route:</strong>
                          <strong>
                            <a href={"https://radroute.run/" + fl.route}>
                              <CardHeader className="raddGrad p-3 rounded-pill">
                                https://RadRoute.run/{fl.route}
                              </CardHeader>
                            </a>
                          </strong>
                          <CardTitle tag="h5"> </CardTitle>
                          <hr />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <CardTitle>Language:</CardTitle>
                          <CardText>{fl.ext}</CardText>
                          <hr />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <CardTitle className="routesGrad rounded-pill p-2">
                            <strong>Code</strong>
                          </CardTitle>
                          <CardText onClick={tronk}>
                            <p className={trunx}>{fl.pFile}</p>
                          </CardText>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <strong>
                            <CardTitle>File Name</CardTitle>
                            {fl.fileKey}
                          </strong>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Peep;
