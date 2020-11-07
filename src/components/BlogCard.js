import React from "react";
import { Segment, Header, Divider } from "semantic-ui-react";

const BlogCard = ({ author, title, abstract }) => {
  return (
    <Segment secondary>
      <Header as="h3">{title}</Header>
      <Header as="h4">{author}</Header>
      <Divider />
      {abstract}
    </Segment>
  );
};

export default BlogCard;
