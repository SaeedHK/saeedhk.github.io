import React from "react";
import { Header, Segment, Container, Icon, Button } from "semantic-ui-react";

const Support = () => (
  <Segment style={{ padding: "4em 0em" }} vertical id="support">
    <Header as="h1" textAlign="center">
      حمایت
    </Header>
    <Header as="h3" textAlign="center">
      در صورت تمایل میتوانید این سایت را طریق لینک زیر حمایت کنید.
    </Header>
    <Container style={{ marginTop: "3em" }} textAlign="center">
      <Button
        as="a"
        href="https://www.paypal.me/SaeedHadikhanloo"
        target="_blank"
      >
        حمایت مالی
        <Icon name="paypal" />
      </Button>
    </Container>
  </Segment>
);

export default Support;
