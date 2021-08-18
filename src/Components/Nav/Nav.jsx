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
import rad from "../../assets/images/rad.png";
import routes from "../../assets/images/routes.png";
import benix from "../../assets/images/rad.png";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");
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

  const changeThing = () =>{
    console.log('hirrelr')
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
              onMouseEnter={changeThing}
              src={user.avatar}
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
