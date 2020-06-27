import React from "react";
import { Button, Grid, Header, Segment } from "semantic-ui-react";

const Member = () => (
  <Segment secondary>
    <Grid container stackable>
      <Grid.Row>
        <Header
          as="h4"
          textAlign="center"
          style={{ marginBottom: "1em" }}
        ></Header>
        <p></p>
      </Grid.Row>
      <Grid.Row>
        <Button color="teal" as="a"></Button>
        <Button color="teal" as="a"></Button>
      </Grid.Row>
    </Grid>
  </Segment>
);

const Members = () => (
  <Segment style={{ padding: "4em 0em" }} vertical id="podcasts">
    <Header as="h1" textAlign="center">
      پادکستها
    </Header>
    <Header as="h3" textAlign="center" style={{ marginBottom: "3em" }}>
      هر پادکست شامل یک فایل صوتی و یک فایل متنی میباشد. برای دریافت هر کدام روی
      گزینه مناسب کلیک بفرمایید.
    </Header>
    <Grid container stackable>
      <Grid.Row>
        <Member />
      </Grid.Row>
      <Grid.Row>
        <Member />
      </Grid.Row>
    </Grid>
  </Segment>
);

export default Members;
