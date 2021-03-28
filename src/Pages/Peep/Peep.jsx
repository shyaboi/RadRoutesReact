import userEvent from "@testing-library/user-event";
import React, { useState, useEffect, Suspense } from "react";

import { Container, Row, Col } from "reactstrap";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
  CardImg,
} from "reactstrap";
import Navi from "../../Components/Nav/Nav";
import fetchy from "../../Utils/Fetcher";
import axios from "axios";
import CodeBlock from "@tenon-io/tenon-codeblock";

function Peep() {
  const [allRoutes, setAllRoutes] = useState([]);
  const [trunx, setTrunx] = useState("");
  const [userD, setUserD] = useState("");

  const data = async (props) => {
    fetchy("https://radroute.run/all").then(async (data) => {
      console.log(data.userTrunk);
      let rd = await data.allRoutes;
      let ud = await data.userTrunk;
      setAllRoutes(rd);
      setUserD(ud);
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

  let renderAvatar = (e) => {
    let userObj;
    if (userD) {
      userObj = userD.find((obj) => obj.user_id === e);
      return (
        <Col>
          <CardTitle>
            User Name:
            <hr />
            <strong>{userObj.user}</strong>
          </CardTitle>
          <CardImg
            top
            className='rndNav img-fluid mx-auto shad profPic'
            src={userObj.avatar}
            alt='Card image cap'
            width='50%'
          />
        </Col>
      );
    } else {
      return <div>Loading....</div>;
    }
  };

  let renderLang = (e) => {
    switch (e) {
      case "py":
        return (
          <Col>
          <CardTitle>
              <strong>Python</strong>
            </CardTitle>
          <CardImg
            top
            className='rndNav img-fluid mx-auto shad profPic'
            src='https://cdn.drawception.com/images/panels/2018/1-1/xNgFE4yjtw-2.png'
            alt='Card image cap'
            width='50%'
          />
          </Col>
        );
      case "rb":
        return (
          <Col>
            <CardTitle>
              <strong>Ruby</strong>
            </CardTitle>
            <CardImg
              top
              className='rndNav img-fluid mx-auto shad profPic'
              src='https://develop.spacemacs.org/layers/+lang/ruby/img/ruby.png'
              alt='Card image cap'
              width='50%'
            />
          </Col>
        );
      case "js":
        return (
          <Col>
          <CardTitle>
              <strong>Node.JS</strong>
            </CardTitle>
          <CardImg
            top
            className='rndNav img-fluid mx-auto shad profPic'
            src='https://www.clipartmax.com/png/small/89-894960_js-discord-bot-logo-node-js-and-react-js.png'
            alt='Card image cap'
            width='50%'
          />
          </Col>
        );
      default:
        break;
    }
  };

  return (
    <Container>
      <Container>
        <Navi />
      </Container>
      <br />
      <br />
      <br />
      <Row className='mt-5'>
        <Col className='shad radGrad p-3 txt-cen rounded-pill stok'>
          <h1>Peep other users code and routes</h1>
        </Col>
      </Row>
      <Row xs='1'>
        {allRoutes.map((fl) => {
          return (
            <Row className='p-5 mt-3 '>
              <Card body>
                <Row className='txt-cen mr-5 ml-5 mt-5'>
                  {renderAvatar(fl.user_id)}
                  <Col>
                    <CardTitle>Language:</CardTitle>
                    <hr />
                    <CardText>{renderLang(fl.ext)}</CardText>
                  </Col>
                </Row>
                <CardBody>
                  <Row>
                    <Col>
                      <strong>Route:</strong>
                      <strong>
                        <a href={"https://radroute.run/files/" + fl.route_name}>
                          <CardHeader className='raddGrad p-3 rounded-pill'>
                            https://RadRoute.run/files/{fl.route_name}
                          </CardHeader>
                        </a>
                      </strong>
                      <CardTitle tag='h5'> </CardTitle>
                      <hr />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <CardTitle className='routesGrad rounded-pill p-2'>
                        <strong>Code</strong>
                      </CardTitle>
                      <CardText onClick={tronk}>
                        <p className={trunx}>
                          <CodeBlock codeString={`${fl.pFile}`} />
                        </p>
                      </CardText>
                    </Col>
                  </Row>

                  <hr />

                  <Row className='shad '>
                    <Col>
                      <CardTitle>Run Code with Rad Routes Runner :</CardTitle>
                      <CodeBlock codeString={`rr -r ${fl.route_name}`} />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Row>
          );
        })}
      </Row>
    </Container>
  );
}

export default Peep;
