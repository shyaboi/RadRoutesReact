import React, { useEffect, useState } from "react";
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Input, Label
} from "reactstrap";
import Navi from '../../Components/Nav/Nav'
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import axios from 'axios';




function Home() {
  const [user, setUser] = useState('');
  const [routes, setRoutes] = useState([]);
  const history = useHistory();

  let jwtEnigma = () => {
    let token = localStorage.getItem('enc')
    if (token) {
      var decoded = jwt_decode(token);
      let cleanDecoded = { 'user': decoded.user, 'email': decoded.email, 'avatar': decoded.avatar, 'routes': decoded.routes, 'joined': decoded.joined, 'd': decoded.morD, }
      setUser(cleanDecoded)
      setRoutes(decoded.routes)
    }
    else { alert("You're not authorized to view this page \n GITOUT! \n Meh....doesn't matter \n You can't do any fun auth things anyway \n Login to have a good time please.") }
  }


  const logout = () => {
    console.log('ok')
    localStorage.removeItem('enc')
    alert(`Be Rad ${user.user}\n See you next time`)
    history.push("/");

  }

  useEffect(() => {
    jwtEnigma()
  }, []);

  const comingSoon = () => {

  }


  return (
    <Container>
      <Container>
        <Navi />
      </Container>
      <Container className="mt-5 pt-5 txt-cen">
        <Card>
          <Row>
            <Col>
              <CardImg top className='rnd mx-auto shad profPic' src={user.avatar} alt="Card image cap" />
              
            </Col>
          </Row>
          <CardBody>
            <Row>
              <Col>
                <CardTitle tag="h1">{user.user}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Joined: {user.joined}</CardSubtitle>
              </Col>

            </Row>
            <Row className='m-2 p-2'>
              <Col>
                User Name:
                  </Col>
              <Col>
                <Input type="username" name="username" id="username" value={user.user} />
              </Col>
            </Row>
            <Row className='m-2 p-2'>

              <Col>
                Email:
                </Col>
              <Col>
                <Input type="email" name="email" id="email" value={user.email} />
              </Col>
            </Row>
            <Row className='m-2 p-2'>

              <Col>
                Avatar URL:
                </Col>
              <Col>
                <Input type="avatar" name="avatar" id="avatar" value={user.avatar} />
              </Col>
            </Row>
            <Row>
              <Col>
                Active Routes:
                </Col>
            </Row>
            <Row md='1' xl='2'>
              {routes.map((fl) => {
                return (
                  <Col>
                    <Card>
                      <CardTitle >Hosted At:</CardTitle>
                      <CardTitle tag="h3" className='shad p-2 m-2'>
                        <a href={`https://radroute.run/${fl.route_name}`}>
                        RadRoute.run/{fl.route_name}
                        </a>
                      </CardTitle>
                      <CardTitle>
                        Raw Code: 
                      </CardTitle>
                      <CardText className='m-2'>
                        {fl.pFile}
                        </CardText>
                      <CardText className='shad m-2'>
                        File Type: {fl.ext}
                      </CardText>
                      <Button color='secondary mb-2 mr-3 ml-3'>Download</Button>
                      <Button color='secondaryGrad mb-2 mr-3 ml-3'>Run with RR Runner</Button>
                    </Card>
                  </Col>
                )
              })}
            </Row>
            <Button className='p-3 mr-5 mt-4' color='primaryGrad' onClick={comingSoon}>Update Profile</Button>
            <Button className='p-3 mr-5 mt-4' color='primary' onClick={logout}>Logout</Button>
          </CardBody>
        </Card>

      </Container>
    </Container>
  );
}

export default Home;