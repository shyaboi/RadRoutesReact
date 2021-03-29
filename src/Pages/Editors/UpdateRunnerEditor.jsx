// import react usestate and useeffect
import React, { useState, useEffect } from "react";
//importing  components from reacctstrap
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import axios from "axios";

//import ace editor_---------------------------------------
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-rust";
// ace theme imports
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
//END import ace editor_---------------------------------------
import fetchy from "../../Utils/Fetcher";

// ssetup the editor function for the component
function Editor(props) {
  let { rt, fnk, rtid, langy } = props;
  console.log(fnk)
  let switchLangy = (l) => {
    switch (l) {
      case "py":
        langy = "python";
        setShortLang('py')
        break;
      case "rb":
        langy = "ruby";
        setShortLang('rb')
        break;
      case "js":
        langy = "javascript";
        setShortLang('js')
        break;
      default:
        break;
    }
  };
  //Dropdown Open states--------------------------------------------------------------------------------------------
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownThemeOpen, setDropdownThemeOpen] = useState(false);
  const [dropdownFontOpen, setDropdownFontOpen] = useState(false);
  const [dropdownWrapOpen, setDropdownWrapOpen] = useState(false);
  const [dropdownLangOpen, setDropdownLangOpen] = useState(false);
  //END Dropdown Open states--------------------------------------------------------------------------------------------

  //Dropdown Selector states--------------------------------------------------------------------------------------------
  const [themeState, setthemeState] = useState("");
  const [ThemeText, setthemeText] = useState("");
  const [fontSize, setfontSize] = useState("");
  const [wrapState, setWrapState] = useState(true);
  const [wrapStateText, setWrapStateText] = useState("");
  const [lang, setLang] = useState("");
  const [shortLang, setShortLang] = useState("");
  //END Dropdown Selector states--------------------------------------------------------------------------------------------

  //toggle states--------------------------------------------------------------------------------------------

  // const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleTheme = () => setDropdownThemeOpen((prevState) => !prevState);
  const toggleFontSize = () => setDropdownFontOpen((prevState) => !prevState);
  const toggleWrap = () => setDropdownWrapOpen((prevState) => !prevState);
  const toggleLang = () => setDropdownLangOpen((prevState) => !prevState);
  // const toggleBasicAuto = () => setDropdownOpen((prevState) => !prevState);
  // const toggleHeight = () => setDropdownOpen((prevState) => !prevState);
  // const toggleLiveAuto = () => setDropdownOpen((prevState) => !prevState);
  // const toggleSnippets = () => setDropdownOpen((prevState) => !prevState);
  //END toggle states--------------------------------------------------------------------------------------------

  //Post states--------------------------------------------------------------------------------------------

  const [isLoading, setIsLoading] = useState(false);
  //route state
  let [route, setRoute] = useState("");
  //function statew
  let [funk, setFunk] = useState("");

  const [avail, setAvail] = useState("avail");
  const [routeExists, setExitance] = useState("Availible");

  //END Post states--------------------------------------------------------------------------------------------

  //window size states--------------------------------------------------------------------------------------------

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  //ENDwindow size states--------------------------------------------------------------------------------------------

  let windowSize = () => {
    let x = window.innerHeight - 450;
    setWidth(window.innerWidth);
    setHeight(x);
    console.log(width, window.innerHeight);
  };

  window.addEventListener("resize", windowSize);

  //setup use effect
  useEffect(() => {
    switchLangy(langy);
    setHeight(window.innerHeight - 450);
    setWidth(window.innerWidth);
    //if the theme is saved in local storage, then get items and set
    if (localStorage.getItem("currentTheme")) {
      let theme = localStorage.getItem("currentTheme");
      let themeText = localStorage.getItem("currentThemeText");
      let fontSizez = localStorage.getItem("FontSize");
      let wrap = localStorage.getItem("Wrap");
      let lan = langy;
      let fun = fnk;
      if (wrap === "Enabled") {
        setWrapState(true);
        setWrapStateText("Enabled");
        // else set the states to default settings
      } else {
        setWrapState(false);
        setWrapStateText(wrap);
      }

      setthemeState(theme);
      setthemeText(themeText);
      setfontSize(fontSizez);
      setLang(lan);
      setFunk(fun);
    } else {
      setFunk(fnk);
      setthemeState("terminal");
      setthemeText("Termial");
      setfontSize(44);
      setWrapState(true);
      setWrapStateText("Enabled");
      setLang(langy);
    }
  }, []);
  const routeChange = (e) => {
    let r = e.target.value;
    setRoute(r);
    routeChecker(r);
  };
  const routeChecker = (rr) => {
    fetchy(`https://radroute.run/exists/${rr}`).then(async (data) => {
      console.log(data);
      let d = data;
      if (d === false) {
        setExitance("Route Availible");
        setAvail("avail");
      }
      if (d === true) {
        setExitance("Route NOT Availible");
        setAvail("notAvail");
      }
    });
  };

  //setting up the submit function for the post

  const onSubmit = async () => {
    if (avail === "notAvail") {
      alert(`Please choose another route, \n ${route} is taken`);
      return `Please choose another route, \n ${route} is taken`;
    } else if (route === "") {
      let bod = JSON.stringify({
        route: rt,
        pFile: funk,
        route_id: rtid,
        ext: shortLang,
        enc: localStorage.getItem("enc"),
      });
      axios.post("http://localhost:5000/udr", bod).then(function (response) {
        let rData = response;
        console.log(rData);
        localStorage.removeItem("enc");
        localStorage.setItem("enc", rData.data);
        alert(
          `Updated your R.A.D. Route\nRefresh your profile, or peep some code`
        );
        return;
      });
    } else if (avail === "avail") {
      let bod = JSON.stringify({
        route: route,
        pFile: funk,
        route_id: rtid,
        ext: shortLang,
        enc: localStorage.getItem("enc"),
      });
      axios.post("http://localhost:5000/udr", bod).then(function (response) {
        let rData = response;
        console.log(rData);
        localStorage.removeItem("enc");
        localStorage.setItem("enc", rData.data);
        alert(
          `Updated your R.A.D. Route\nRefresh your profile, or peep some code`
        );
        return;
      });
    }
  };

  //change theme funtion
  const changeThemeValue = (e) => {
    //set theme to e.target
    let currentTheme = e.currentTarget.value;
    let currentThemeText = e.currentTarget.textContent;
    //set theme to state
    setthemeState(currentTheme);
    setthemeText(currentThemeText);
    //set theme to local storage
    localStorage.setItem("currentTheme", currentTheme);
    localStorage.setItem("currentThemeText", currentThemeText);
  };
  const changeFontValue = (e) => {
    //set theme to e.target
    let fontSizez = e.currentTarget.value;
    //set theme to state
    setfontSize(fontSizez);
    //set theme to local storage
    localStorage.setItem("FontSize", fontSizez);
  };

  const changeWrapValue = (e) => {
    //set theme to e.target
    let wrap = e.currentTarget.value;
    ///if wrap is true
    if (wrap === "1") {
      //set wrap state to true
      setWrapState(true);
      setWrapStateText("Enabled");
      //save wrap state in local storage
      localStorage.setItem("Wrap", "Enabled");
    }
    //else set wrap state to false
    else {
      setWrapState(false);
      setWrapStateText("Disabled");
      localStorage.setItem("Wrap", "Disabled");
    }
  };

  const changeLangValue = (e) => {
    //set theme to e.target
    let lVal = e.currentTarget.value;
    let l = e.currentTarget.textContent;
    //set theme to state
    setLang(lVal);
    //set theme to local storage
    localStorage.setItem("Lang", lVal);
  };

  const funkChange = (e) => {
    setFunk(e);
    localStorage.setItem("Funk", e);
  };

  return (
    <Container className='txt-cen' fluid>
      <FormGroup className='ninja'>
        <Row>
          <Col>
            <Label className={avail}> Edit Route: </Label>
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              type='route'
              value={route}
              onChange={(e) => {
                routeChange(e);
              }}
              name='route'
              id='route'
              placeholder={rt}
            />
            <Label className={avail}> {routeExists}</Label>
          </Col>
        </Row>
      </FormGroup>
      <Row id='drop-row' className='m-1 '>
        <Dropdown isOpen={dropdownThemeOpen} toggle={toggleTheme}>
          <DropdownToggle caret color='primary' className='m-1 ninja'>
            {ThemeText}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Pick Your Editor Theme</DropdownItem>
            <DropdownItem onClick={changeThemeValue} value='kuroir'>
              Kuroir
            </DropdownItem>
            <DropdownItem onClick={changeThemeValue} value='github'>
              GitHub
            </DropdownItem>
            <DropdownItem onClick={changeThemeValue} value='terminal'>
              Terminal
            </DropdownItem>
            <DropdownItem onClick={changeThemeValue} value='tomorrow'>
              Tomorrow
            </DropdownItem>
            <DropdownItem onClick={changeThemeValue} value='twilight'>
              Twilight
            </DropdownItem>
            <DropdownItem onClick={changeThemeValue} value='xcode'>
              Xcode
            </DropdownItem>
            <DropdownItem onClick={changeThemeValue} value='textmate'>
              textmate
            </DropdownItem>
            <DropdownItem onClick={changeThemeValue} value='solarized_dark'>
              Solarized Dark
            </DropdownItem>
            <DropdownItem onClick={changeThemeValue} value='solarized_light'>
              Solarized Light
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown isOpen={dropdownFontOpen} toggle={toggleFontSize}>
          <DropdownToggle caret color='primaryGrad' className='m-1 ninja'>
            {fontSize}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Size in px</DropdownItem>
            <DropdownItem onClick={changeFontValue} value={5}>
              5
            </DropdownItem>
            <DropdownItem onClick={changeFontValue} value={10}>
              10
            </DropdownItem>
            <DropdownItem onClick={changeFontValue} value={15}>
              15
            </DropdownItem>
            <DropdownItem onClick={changeFontValue} value={20}>
              20
            </DropdownItem>
            <DropdownItem onClick={changeFontValue} value={25}>
              25
            </DropdownItem>
            <DropdownItem onClick={changeFontValue} value={30}>
              30
            </DropdownItem>
            <DropdownItem onClick={changeFontValue} value={35}>
              35
            </DropdownItem>
            <DropdownItem onClick={changeFontValue} value={40}>
              40
            </DropdownItem>
            <DropdownItem onClick={changeFontValue} value={45}>
              45
            </DropdownItem>
            <DropdownItem onClick={changeFontValue} value={50}>
              50
            </DropdownItem>
            <DropdownItem onClick={changeFontValue} value={55}>
              55
            </DropdownItem>
            <DropdownItem onClick={changeFontValue} value={88}>
              88
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown isOpen={dropdownWrapOpen} toggle={toggleWrap}>
          <DropdownToggle caret color='secondary' className='m-1 ninja'>
            Wrap {wrapStateText}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Set text wrap of the editor</DropdownItem>
            <DropdownItem onClick={changeWrapValue} value={1}>
              Enabled
            </DropdownItem>
            <DropdownItem onClick={changeWrapValue} value={2}>
              Disabled
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown isOpen={dropdownLangOpen} toggle={toggleLang}>
          <DropdownToggle caret color='secondaryGrad' className='m-1 ninja'>
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Set The Language</DropdownItem>
            <DropdownItem onClick={changeLangValue} value={"javascript"}>
              JavaScript (Node)
            </DropdownItem>
            <DropdownItem onClick={changeLangValue} value={"python"}>
              Python
            </DropdownItem>
            <DropdownItem onClick={changeLangValue} value={"ruby"}>
              Ruby
            </DropdownItem>
            <DropdownItem disabled onClick={changeLangValue} value={"java"}>
              Java
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Row>
      <Row>
        <AceEditor
          height={`${height}px`}
          width={`${width}px`}
          mode={lang}
          theme={themeState}
          fontSize={parseInt(fontSize)}
          wrapEnabled={wrapState}
          editorProps={{ $blockScrolling: true }}
          value={funk}
          onChange={funkChange}
          id='funktion'
          placeholder="print('hello world')"
          type='textarea'
          name='funktion'
          showGutter={true}
        />
      </Row>
      <hr></hr>
      <Row id='submitRow'>
        <Col>
          <Button color='primary' onClick={onSubmit}>
            Update Route
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Editor;
