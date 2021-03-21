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
import Navi from "../../Components/Nav/Nav";


// ssetup the editor function for the component
function Editor() {
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
  //END Post states--------------------------------------------------------------------------------------------

  //setup use effect
  useEffect(() => {
    //if the theme is saved in local storage, then get items and set
    if (localStorage.getItem("currentTheme")) {
      let theme = localStorage.getItem("currentTheme");
      let themeText = localStorage.getItem("currentThemeText");
      let fontSizez = localStorage.getItem("FontSize");
      let wrap = localStorage.getItem("Wrap");
      let lan = localStorage.getItem("Lang");
      let fun = localStorage.getItem("Funk");
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
      setthemeState("terminal");
      setthemeText("Termial");
      setfontSize(44);
      setWrapState(true);
      setWrapStateText("Enabled");
      setLang("Python");
    }
  }, []);

  //setting up the submit function for the post
  const onSubmit = async (event) => {
    // prevent redirect
    event.preventDefault();
    //set the final funtion in state
    setIsLoading(true);
    //make a new xmlhttp post
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5000/file", true);
    //set headers
    xhr.setRequestHeader("Content-Type", "application/json");
    //send the post
    xhr.send(
      JSON.stringify({
        route: route,
        funktion: funk,
      })
    );

    // reset form and loading state
    setIsLoading(false);
    //alert to new route
    alert(`Redirecting you to https://uselessapi.com/u-c-r/${route}`);
    //redirect to new route in window
    window.location.replace(`https://uselessapi.com/u-c-r/${route}`);
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
    if (wrap === 1) {
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
    localStorage.setItem("Funk", funk)
  };

  return (
    <Container fluid>
      <Container>
        <Row>
          <Col>
            <Navi />
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 pt-5 txt-cen">
        <Row>
          <Col id="editor-head">
            <Label for="exampleText">
              <h3>Create a Rad Route!</h3>
            </Label>
          </Col>
        </Row>
        <Form onSubmit={onSubmit}>
          <FormGroup className="m-1 ninja">
            <Row>
              <Col>
                <Label className="prim">
                  <h4>Route will be hosted at </h4>
                </Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label className="sec">
                  <h4>RadRoute.run/files/</h4>
                </Label>
                <Label className="primGrad">
                  <h4>
                  {route}
                  </h4>
                </Label>
              </Col>
            </Row>
            <Row>
              <Col>
            <Input
              type="route"
              value={route}
              onChange={(e) => setRoute(e.target.value)}
              name="route"
              id="route"
              placeholder="my-rad-api"
            />
              </Col>
            </Row>
          </FormGroup>
          <Row fluid id="drop-row" className="m-1 ">
            <Dropdown isOpen={dropdownThemeOpen} toggle={toggleTheme}>
              <DropdownToggle caret color="primary" className="m-1 ninja">
                {ThemeText}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Pick Your Editor Theme</DropdownItem>
                <DropdownItem onClick={changeThemeValue} value="kuroir">
                  Kuroir
                </DropdownItem>
                <DropdownItem onClick={changeThemeValue} value="github">
                  GitHub
                </DropdownItem>
                <DropdownItem onClick={changeThemeValue} value="terminal">
                  Terminal
                </DropdownItem>
                <DropdownItem onClick={changeThemeValue} value="tomorrow">
                  Tomorrow
                </DropdownItem>
                <DropdownItem onClick={changeThemeValue} value="twilight">
                  Twilight
                </DropdownItem>
                <DropdownItem onClick={changeThemeValue} value="xcode">
                  Xcode
                </DropdownItem>
                <DropdownItem onClick={changeThemeValue} value="textmate">
                  textmate
                </DropdownItem>
                <DropdownItem onClick={changeThemeValue} value="solarized_dark">
                  Solarized Dark
                </DropdownItem>
                <DropdownItem
                  onClick={changeThemeValue}
                  value="solarized_light"
                >
                  Solarized Light
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown isOpen={dropdownFontOpen} toggle={toggleFontSize}>
              <DropdownToggle caret color="primaryGrad" className="m-1 ninja">
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
              <DropdownToggle caret color="secondary" className="m-1 ninja">
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
              <DropdownToggle caret color="secondaryGrad" className="m-1 ninja">
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Set The Language</DropdownItem>
                <DropdownItem onClick={changeLangValue} value={"javascript"}>
                  Node
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
            <Col>
              <AceEditor
                height="50vh"
                width="60vw"
                mode={lang}
                theme={themeState}
                fontSize={parseInt(fontSize)}
                wrapEnabled={wrapState}
                editorProps={{ $blockScrolling: true }}
                value={funk}
                onChange={funkChange}
                id="funktion"
                placeholder="response.send('hiworld')"
                type="textarea"
                name="funktion"
                showGutter="true"
              />
            </Col>
          </Row>
          <hr></hr>
          <Row id="submitRow">
            <Col>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  );
}

export default Editor;
