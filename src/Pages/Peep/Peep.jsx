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
  Button
} from "reactstrap";
import Navi from "../../Components/Nav/Nav";
import fetchy from "../../Utils/Fetcher";
import axios from "axios";
import CodeBlock from "@tenon-io/tenon-codeblock";

function Peep() {
  const [allRoutes, setAllRoutes] = useState([]);
  const [trunx, setTrunx] = useState("");
  const [userD, setUserD] = useState("");

  const data = async () => {
    fetchy("https://radroute.run/all").then(async (data) => {
      // console.log(data.userTrunk);
      let rd = await data.allRoutes;
      let ud = await data.userTrunk;
      
      sortUpdated(rd)
      setUserD(ud);
    });
  };
  
 let sortUpdated = async (r)=> {
  let datSort = await r.sort((a, b) => {
    if(!a.date_time_last_updated){
      a=a.date_time_created
      b=b.date_time_created
    }
    else{
    a = a.date_time_last_updated.split('/');
    b = b.date_time_last_updated.split('/');}
    return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
});

setAllRoutes(datSort.reverse())

 }


  useEffect(() => {
    data();
    setTrunx("trunc");
  }, []);

  const tronk = (e) => {
    // console.log(e.target.className);
    if (e.target.className === "trunc") {
      e.target.className = "notTrunc";
      // console.log(trunx);
    } else {
      e.target.className = "trunc";
      //   setTrunx('notTrunc');
      // console.log(trunx);
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
            className='rndNav img-fluid mx-auto shad peepPic'
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
            <CardTitle>Language:</CardTitle>
            <hr />
            <CardTitle>
              <strong>Python</strong>
            </CardTitle>
            <CardImg
              top
              className='rndNav img-fluid mx-auto shad peepPic'
              src='https://cdn.drawception.com/images/panels/2018/1-1/xNgFE4yjtw-2.png'
              alt='Card image cap'
              width='50%'
            />
          </Col>
        );
      case "rb":
        return (
          <Col>
            <CardTitle>Language:</CardTitle>
            <hr />
            <CardTitle>
              <strong>Ruby</strong>
            </CardTitle>
            <CardImg
              top
              className='rndNav img-fluid mx-auto shad peepPic'
              src='https://develop.spacemacs.org/layers/+lang/ruby/img/ruby.png'
              alt='Card image cap'
              width='50%'
            />
          </Col>
        );
      case "js":
        return (
          <Col>
            <CardTitle>Language:</CardTitle>
            <hr />
            <CardTitle>
              <strong>Node.JS</strong>
            </CardTitle>
            <CardImg
              top
              className='rndNav img-fluid mx-auto shad peepPic'
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
        <Col className='shad radGrad p-1 mb-3 txt-cen rounded-pill stok'>
          <h1>Peep other users code and routes</h1>
        </Col>
      </Row>
     
      <Row md='1' className='txt-cen'>
        {allRoutes.map((fl) => {
          return (
            <Col>
              <Card body className='p-2 m-2'>
                <CardBody>
                  <CardHeader>
                  <CardTitle>Date Created: {fl.date_time_created}</CardTitle>
                  <CardTitle>Last Updated: {fl.date_time_last_updated}</CardTitle>
                    <Row>
                      {renderAvatar(fl.user_id)}

                      {renderLang(fl.ext)}
                    </Row>
                  </CardHeader>
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
                  <CardTitle className='routesGrad rounded-pill p-2'>
                    <strong>Code</strong>
                  </CardTitle>
                  <CardText onClick={tronk}>
                    <CodeBlock codeString={`${fl.pFile}`} />
                  </CardText>

                  <hr />

                  <CardTitle>Run Code with Rad Routes Runner :</CardTitle>
                  <CodeBlock codeString={`rr -r ${fl.route_name}`} />
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Peep;
