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
          <Form method='POST' action="http://localhost:5000/file" >
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </FormText>
          </FormGroup>
          <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
