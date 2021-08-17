import React, { useEffect, useState } from "react";
import {BsCodeSlash, BsCloudUpload} from 'react-icons/bs'
import {CgBrowse} from 'react-icons/cg'
import {FaEdit} from 'react-icons/fa'
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
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
            <h1>Welcome</h1>
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
        <Row>
          <Col className='shad m-4 p-2'>
          <NavLink href='/Editor'>
              <Button className='shad  p-4' color='primary'>
           <BsCodeSlash class='iconz' />
            </Button>
            </NavLink>
          </Col>
          <Col className='shad m-4 p-2'>
          <NavLink href='/FileUpload'>
              <Button className='shad  p-4' color='primaryGrad'>
              <BsCloudUpload class='iconz'/>
           </Button>
            </NavLink>
          </Col>
          <Col className='shad m-4 p-2'>
          <NavLink href='/Peep'>
              <Button className='shad  p-4' color='secondary'>
            <CgBrowse class='iconz'/>
            </Button>
            </NavLink>
          </Col>
          <Col className='shad m-4 p-2'>
          <NavLink href='/Profile'>
              <Button className='shad  p-4' color='secondaryGrad'>
            <FaEdit class='iconz'/>
            </Button>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
