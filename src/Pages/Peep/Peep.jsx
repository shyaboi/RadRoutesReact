import React, { useState, useEffect, Suspense } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, NavLink, Row, Col } from "reactstrap";
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardHeader,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "reactstrap";
import Navi from "../../Components/Nav/Nav";
import fetchy from '../../Utils/Fetcher'


function Peep() {
    const [allRoutes, setAllRoutes] = useState([]);
    const [trunx, setTrunx] = useState('');

    const data = (props) => {
        fetchy("http://localhost:5000/all").then(async (data) => {
          console.log(data);
          let d = data;
          setAllRoutes(d)
        });
      };

  useEffect(() => {
      data()
      setTrunx('trunc')
  }, []);

  const tronk = (e)=> {
      console.log(e.target.className)
      if(e.target.className==='trunc'){
          e.target.className = 'notTrunc'
          console.log(trunx)
      }else{
        e.target.className = 'trunc'
        //   setTrunx('notTrunc');
    console.log(trunx)}
  }

  return (
    <Container fluid>
      <Container>
        <Navi />
      </Container>
      <Container className="mt-5 pt-5 txt-cen" fluid>
        <Row>
          <Col>
          <h1>
          Peep other users code and routes
          </h1>
          </Col>
        </Row>
        <Row xs="1" xl="2">
          {allRoutes.map((fl) => {
            return (
              <Row className="p-5 mt-5 text-center">
                <Col>
                  <Card body className="text-center">
                      <CardBody>
                    <Row>
                      <Col>
                        <CardHeader>{fl.route}</CardHeader>

                        <CardTitle tag="h5"> </CardTitle>
                        <hr />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <CardText>{fl.ext}</CardText>
                        <hr />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <CardText 
                        onClick={tronk}
                        
                        >
                            <p className={trunx}>
                            {fl.pFile}
                            </p>
                            </CardText>
                      </Col>
                    </Row> 
                    <Row>
                      <Col>
                        <p> Reply from Open Flags Team: </p>
                        {fl.fileKey}
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
