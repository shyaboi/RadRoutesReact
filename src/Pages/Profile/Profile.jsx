import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Input,
  CardHeader,
  NavLink,
} from "reactstrap";
import Navi from "../../Components/Nav/Nav";
import UpdateModal from '../../Components/Modals/UpdateCodeModal'
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CodeBlock from "@tenon-io/tenon-codeblock";

function Home() {
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [routes, setRoutes] = useState([]);
  const history = useHistory();

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
      console.log(decoded.joined);
      setUser(cleanDecoded);
      setRoutes(decoded.routes);
    } else {
      // alert(
      //   "You're not authorized to view this page \n GITOUT! \n Meh....doesn't matter \n You can't do any fun auth things anyway \n Login to have a good time please."
      // );
    }
  };

  const logout = () => {
    console.log("ok");
    localStorage.removeItem("enc");
    alert(`Be Rad ${user.user}\n See you next time`);
    history.push("/");
  };

  useEffect(() => {
    jwtEnigma();
  }, []);

  const updater = (e) => {
    console.log(e.target);
    console.log(email, userName, avatar);
    var emailCheck = email !== "" ? email : user.email;
    var userCheck = userName !== "" ? userName : user.user;
    var avaCheck = avatar !== "" ? avatar : user.avatar;
    let bod = JSON.stringify({
      email: emailCheck,
      user_name: userCheck,
      avatar: avaCheck,
      enc: localStorage.getItem("enc"),
    });
    axios.post("https://radroute.run/udp", bod).then(function (response) {
      let rData = response;
      localStorage.removeItem("enc");
      localStorage.setItem("enc", rData.data);
      jwtEnigma();
      alert("Profile Updated!");
    });
  };

  let renderLang = (e) => {
    switch (e) {
      case "py":
        return (
          <div className=''>
            <CardTitle>Language:</CardTitle>
            <CardTitle>
              <strong>Python</strong>
            </CardTitle>
            <CardImg
              className='rndNav img-fluid mx-auto shad profLangPic'
              src='https://cdn.drawception.com/images/panels/2018/1-1/xNgFE4yjtw-2.png'
              alt='Card image cap'
              width='50%'
            />
          </div>
        );
      case "rb":
        return (
          <div className=''>
            <CardTitle>Language:</CardTitle>
            <CardTitle>
              <strong>Ruby</strong>
            </CardTitle>
            <CardImg
              className='rndNav img-fluid mx-auto shad profLangPic'
              src='https://develop.spacemacs.org/layers/+lang/ruby/img/ruby.png'
              alt='Card image cap'
              width='50%'
            />
          </div>
        );
      case "js":
        return (
          <div className=''>
            <CardTitle>Language:</CardTitle>
            <CardTitle>
              <strong>Node.JS</strong>
            </CardTitle>
            <CardImg
              className='rndNav img-fluid mx-auto shad profLangPic'
              src='https://www.clipartmax.com/png/small/89-894960_js-discord-bot-logo-node-js-and-react-js.png'
              alt='Card image cap'
              width='50%'
            />
          </div>
        );
      default:
        break;
    }
  };

  return (
    <Container fluid>
      <Container>
        <Navi />
      </Container>
      <Container className='mt-5 pt-5 txt-cen' fluid>
        <Card>
          <Row>
            <Col>
              <CardImg
                top
                className='rnd mx-auto shad profPic'
                src={user.avatar}
                alt='Card image cap'
              />
            </Col>
          </Row>
          <CardBody>
            <Row>
              <Col>
                <CardTitle tag='h1'>{user.user}</CardTitle>
                <CardSubtitle tag='h6' className='mb-2 text-muted'>
                  Joined: {user.joined}
                </CardSubtitle>
              </Col>
            </Row>
            <Row className='m-2 p-2'>
              <Col>User Name:</Col>
              <Col>
                <Input
                  onChange={(e) => setUserName(e.target.value)}
                  type='username'
                  name='username'
                  id='username'
                  placeholder={user.user}
                />
              </Col>
            </Row>
            <Row className='m-2 p-2'>
              <Col>Email:</Col>
              <Col>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  name='email'
                  id='email'
                  placeholder={user.email}
                />
              </Col>
            </Row>
            <Row className='m-2 p-2'>
              <Col>Avatar URL:</Col>
              <Col>
                <Input
                  onChange={(e) => setAvatar(e.target.value)}
                  type='avatar'
                  name='avatar'
                  id='avatar'
                  placeholder={user.avatar}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  className='p-3  m-4'
                  color='primaryGrad'
                  onClick={logout}
                >
                  Logout
                </Button>
              </Col>
              <Col>
                <Button className='p-3  mt-4' color='primary' onClick={updater}>
                  Update Profile
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
      <Container fluid>
        <Row className='mt-3 shad p-1'>
          <Col>
            <h1>Your Active Routes</h1>
          </Col>
        </Row>
        <Row md='1' xl='1'>
          {routes.map((fl) => {
            return (
              <Col className='mt-3 txt-cen'>
                <Card className='p-3'>
                  <CardBody>
                    <CardHeader>
                      <Row xs='1' xl='2'>
                        <Col>
                          <CardTitle>Hosted At:</CardTitle>
                          <CardTitle tag='h3' className='p-2 m-2'>
                            <a
                              href={`https://radroute.run/files/${fl.route_name}`}
                            >
                              RadRoute.run/files/
                              {fl.route_name}
                            </a>
                          </CardTitle>
                        </Col>
                        <Col>{renderLang(fl.ext)}</Col>
                      </Row>
                    </CardHeader>
                    <Col className='shad mt-3 p-3'>
                      <CardTitle>Raw Code:</CardTitle>
                      <CardText className='m-2'>
                        {" "}
                        <CodeBlock codeString={`${fl.pFile}`} />
                      </CardText>
                      <UpdateModal buttonLabel="Edit Code" route={fl.route_name} funk={fl.pFile} rtid={fl.route_id} langy={fl.ext}/>
                      Run with Rad Routes Runner :
                      <CodeBlock codeString={`rr -r ${fl.route_name}`} />
                    </Col>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
