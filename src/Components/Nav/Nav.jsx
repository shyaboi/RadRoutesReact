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
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

const cogSVG = 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2265%22%20height%3D%2260.67%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%201920%201792%22%3E%3Cpath%20d%3D%22M896%20896q0-106-75-181t-181-75t-181%2075t-75%20181t75%20181t181%2075t181-75t75-181zm768%20512q0-52-38-90t-90-38t-90%2038t-38%2090q0%2053%2037.5%2090.5t90.5%2037.5t90.5-37.5t37.5-90.5zm0-1024q0-52-38-90t-90-38t-90%2038t-38%2090q0%2053%2037.5%2090.5T1536%20512t90.5-37.5T1664%20384zm-384%20421v185q0%2010-7%2019.5t-16%2010.5l-155%2024q-11%2035-32%2076q34%2048%2090%20115q7%2011%207%2020q0%2012-7%2019q-23%2030-82.5%2089.5T999%201423q-11%200-21-7l-115-90q-37%2019-77%2031q-11%20108-23%20155q-7%2024-30%2024H547q-11%200-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118%2089q-7%207-20%207q-11%200-21-8q-144-133-144-160q0-9%207-19q10-14%2041-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5T0%20987V802q0-10%207-19.5T23%20772l155-24q11-35%2032-76q-34-48-90-115q-7-11-7-20q0-12%207-20q22-30%2082-89t79-59q11%200%2021%207l115%2090q34-18%2077-32q11-108%2023-154q7-24%2030-24h186q11%200%2020%207.5t10%2017.5l23%20153q34%2010%2075%2031l118-89q8-7%2020-7q11%200%2021%208q144%20133%20144%20160q0%208-7%2019q-12%2016-42%2054t-45%2060q23%2048%2034%2082l152%2023q10%202%2017%2010.5t7%2019.5zm640%20533v140q0%2016-149%2031q-12%2027-30%2052q51%20113%2051%20138q0%204-4%207q-122%2071-124%2071q-8%200-46-47t-52-68q-20%202-30%202t-30-2q-14%2021-52%2068t-46%2047q-2%200-124-71q-4-3-4-7q0-25%2051-138q-18-25-30-52q-149-15-149-31v-140q0-16%20149-31q13-29%2030-52q-51-113-51-138q0-4%204-7q4-2%2035-20t59-34t30-16q8%200%2046%2046.5t52%2067.5q20-2%2030-2t30%202q51-71%2092-112l6-2q4%200%20124%2070q4%203%204%207q0%2025-51%20138q17%2023%2030%2052q149%2015%20149%2031zm0-1024v140q0%2016-149%2031q-12%2027-30%2052q51%20113%2051%20138q0%204-4%207q-122%2071-124%2071q-8%200-46-47t-52-68q-20%202-30%202t-30-2q-14%2021-52%2068t-46%2047q-2%200-124-71q-4-3-4-7q0-25%2051-138q-18-25-30-52q-149-15-149-31V314q0-16%20149-31q13-29%2030-52q-51-113-51-138q0-4%204-7q4-2%2035-20t59-34t30-16q8%200%2046%2046.5t52%2067.5q20-2%2030-2t30%202q51-71%2092-112l6-2q4%200%20124%2070q4%203%204%207q0%2025-51%20138q17%2023%2030%2052q149%2015%20149%2031z%22%20fill%3D%22currentColor%22%2F%3E%3C%2Fsvg%3E'


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
