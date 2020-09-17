//import Code from "./Code";
//import Math from "./Math";
import React, { Component } from "react";
import Markdown from "markdown-to-jsx";
import BlogLayout from "./BlogLayout";

class BlogMD extends Component {
  constructor(props) {
    super(props);

    this.state = { md: "" };
  }

  componentWillMount() {
    const filePath = require("../blogs/blog1.md");
    fetch(filePath)
      .then((res) => res.text())
      .then((md) => {
        this.setState({ md });
      });
  }

  render() {
    let { md } = this.state;

    return (
      <BlogLayout>
        <Markdown children={md} />
      </BlogLayout>
    );
  }
}

export default BlogMD;
