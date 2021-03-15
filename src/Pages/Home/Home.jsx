import React, { useState, useEffect, Suspense } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  NavLink,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const Home = (props) => {
  useEffect(() => {}, []);

  return (
    <Container className="mt-5" fluid>
      <Row className="mt-5">
        <Col>
          This is the home page
          <NavLink href="/">logo</NavLink>
          <Form method="POST" action="http://localhost:5000/file" enctype="multipart/form-data">
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                This is some placeholder block-level help text for the above
                input. It's a bit lighter and easily wraps to a new line.
              </FormText>
            </FormGroup>
            <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="type" id="exampleSelect">
          <option name='python' value="python">Python</option>
          <option name='ruby' value="ruby">Ruby</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
