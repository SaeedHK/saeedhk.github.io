import React, { Component } from "react";
import { Message, Container } from "semantic-ui-react";
import Layout from "./Layout";

export default class Error extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Message negative>
            <Message.Header>Page not exists!</Message.Header>
            <p>Please choose the pages links appear in the top menu.</p>
          </Message>
        </Container>
      </Layout>
    );
  }
}
