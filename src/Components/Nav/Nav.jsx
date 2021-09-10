import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import rad from process.env.PUBLIC_URL + "/images/rad.png";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import cogSVG from "../../Utils/cogSVG";

const routes = process.env.PUBLIC_URL + "assets/images/routes.png";
const rad = process.env.PUBLIC_URL + "assets/images/rad.png";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");
  const [userAva, setUserAva] = useState("");
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
      setUserAva(cleanDecoded.avatar);
      setUser(cleanDecoded);
      // console.log(cleanDecoded)
    } else {
      history.push("/Login");
    }
  };

  useEffect(() => {
    jwtEnigma();
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  const changeToCog = () =>{
    console.log(userAva)
    setUserAva(cogSVG)
    console.log(userAva)
}
  const changeBackUser = () =>{
    console.log(userAva)
    setUserAva(user.avatar)
    console.log(userAva)
}

  return (
    <div>
      <Navbar
        light
        expand='md'
        className='fixed-top muhNav radGrad font-weight-bold '
      >
        <NavbarBrand className='ml-4 brand' href='/Home'>
          <LazyLoadImage
            id='pics'
            effect='blur'
            src={rad} // use normal <img> attributes as props
            height='70px'
            width='100px'
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto ' navbar>
            <NavItem className='border border-primary ml-3'>
              <NavLink href='/Home'>
                <strong>Home</strong>
              </NavLink>
            </NavItem>
            <NavItem className='border border-primaryGrad ml-3'>
              <NavLink href='/Editor'>
                <strong>Editor</strong>
              </NavLink>
            </NavItem>

            <NavItem className='border border-secondary ml-3'>
              <NavLink href='/FileUpload'>
                <strong>Upload a File</strong>
              </NavLink>
            </NavItem>

            <NavItem className='border border-secondaryGrad ml-3'>
              <NavLink href='/Peep'>
                <strong>Peep Code</strong>
              </NavLink>
            </NavItem>
           
           
            <NavItem className='border border-primary ml-3'>
              <NavLink href='https://docs.radroutes.com/Prerequisites'>
                <strong>Downloads</strong>
              </NavLink>
            </NavItem>
            
            <NavItem className='border border-primaryGrad ml-3'>
              <NavLink href='https://docs.radroutes.com'>
                <strong>Documentation</strong>
              </NavLink>
            </NavItem>
          </Nav>
          <NavLink href='/Profile'>
            <img
              onMouseEnter={changeToCog}
              onMouseLeave={changeBackUser}
              src={userAva}
              alt=''
              height='60px'
              width='65px'
              className='rndNav shad'
              
            />
          </NavLink>
          <NavbarBrand className='ml-4 brand' href='/Profile'>
            <LazyLoadImage
              id='pics'
              effect='blur'
              src={routes} // use normal <img> attributes as props
              height='55px'
              width='130px'
            />
          </NavbarBrand>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
