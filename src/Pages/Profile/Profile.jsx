import React, { useEffect, useState } from "react";
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Input, Label
} from "reactstrap";
import Navi from '../../Components/Nav/Nav'
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";




function Home() {
  const [user, setUser] = useState('');
  const history = useHistory();

  let jwtEnigma = () => {
    let token = localStorage.getItem('enc')
    if(token){
    var decoded = jwt_decode(token);
    let cleanDecoded = { 'user': decoded.user, 'email': decoded.email, 'avatar': decoded.avatar, 'routes': decoded.routes, 'joined': decoded.joined, 'd': decoded.morD, }
    setUser(cleanDecoded)}
    else{alert("You're not authorized to view this page \n GITOUT! \n Meh....doesn't matter \n You can't do any fun auth things anyway \n Login to have a good time please.")}
  }
  const logout = ()=> {
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

  let rts;
  let rr = user.routes
  const okF = ()=> {
    if (rr!==undefined) {
      if(rr.length>0){
      console.log('okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
      rts =  user.routes.map((fl) => {
        return(
          <div>
            https://radroute.run/{fl} or rr -r {fl}
          </div>
        )
      }
      )}
      else{rts=<div>no routes yet</div>}
    }else{rts=<div>no routes yet</div>}
    
  }
okF()
  return (
    <Container>
      <Container>
        <Navi />
      </Container>
      <Container className="mt-5 pt-5 txt-cen">
        <div className='mt-5 pt-5'>
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
          Active Routes: 
              {rts}

              <Button className='p-3 mr-5 mt-3' onClick={comingSoon}>Update Profile</Button>
              <Button className='p-3 mr-5 mt-3' color='primary' onClick={logout}>Logout</Button>
            </CardBody>
          </Card>
        </div>
      </Container>
    </Container>
  );
}

export default Home;