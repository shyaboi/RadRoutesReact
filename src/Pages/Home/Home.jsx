import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Navi from '../../Components/Nav/Nav'
import jwt_decode from "jwt-decode";




function Home() {
  const [ user, setUser ] = useState('');
  // const [ user, setUser ] = useState('');

  let jwtEnigma = () => {
    let token = localStorage.getItem('enc')
    if(token){
    var decoded = jwt_decode(token);
    let cleanDecoded = { 'user': decoded.user, 'email': decoded.email, 'avatar': decoded.avatar, 'routes': decoded.routes, 'joined': decoded.joined, 'd': decoded.morD, }
    setUser(cleanDecoded)}
    else{alert("You're not authorized to view this page \n GITOUT!")}
  }


  useEffect(() => {
   jwtEnigma()
  }, []);

  return (
    <Container>
      <Container>

        <Navi />
      </Container>
      <Container className="mt-5 pt-5 txt-cen">
        <Row >
          <Col>
          <h1>Welcome</h1>
            {user.user}
        </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;