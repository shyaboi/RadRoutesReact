import React, { useEffect, useState } from "react";
import {BsCodeSlash, BsCloudUpload} from 'react-icons/bs'
import {CgBrowse} from 'react-icons/cg'
import {FaCogs} from 'react-icons/fa'
import {
  Container,
  Row,
  Col,
  Button,
  CardImg,
  NavLink,
} from "reactstrap";
import Navi from "../../Components/Nav/Nav";
import jwt_decode from "jwt-decode";

function Home() {
  const [user, setUser] = useState("");
  // const [ user, setUser ] = useState('');

  let jwtEnigma = () => {
    let token = localStorage.getItem("enc");
    if (token) {
      var decoded = jwt_decode(token);
      let cleanDecoded = {
        user: decoded.user,
        email: decoded.email,
        avatar: decoded.avatar,
        routes: decoded.routes,
        joined: decoded.joined,
        d: decoded.morD,
      };
      setUser(cleanDecoded);
    } else {
      // alert("You're not authorized to view this page \n GITOUT!")
    }
  };

  useEffect(() => {
    jwtEnigma();
  }, []);

  return (
    <Container>
      <Container>
        <Navi />
      </Container>
      <Container className='mt-5 pt-5 txt-cen'>
        {/* Home Launcher */}
        <Row>
          <Col>
            <h1>R.A.D. User</h1>
            <h3>{user.user}</h3>
            <CardImg
                top
                className='rnd mx-auto shad profPic'
                src={user.avatar}
                alt='Card image cap'
              />
          </Col>
        </Row>
        <Row>
          <Col>
          <h3>
          What would you like to do today?
          </h3>
          </Col>
        </Row>
        <Row className='pt-5'>
          <Col className='m-1'>
          <NavLink href='/Editor'>
              <Button className='shad' color='primary'>
           <BsCodeSlash class='iconz' />
            </Button>
            </NavLink>
          </Col>
          <Col className='m-1'>
          <NavLink href='/FileUpload'>
              <Button className='shad' color='primaryGrad'>
              <BsCloudUpload class='iconz'/>
           </Button>
            </NavLink>
          </Col>
          <Col className='m-1'>
          <NavLink href='/Peep'>
              <Button className='shad' color='secondary'>
            <CgBrowse class='iconz'/>
            </Button>
            </NavLink>
          </Col>
          <Col className='m-1'>
          <NavLink href='/Profile'>
              <Button className='shad' color='secondaryGrad'>
            <FaCogs class='iconz'/>
            </Button>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
