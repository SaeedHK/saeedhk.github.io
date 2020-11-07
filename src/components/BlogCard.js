import React from "react";
import { NavLink } from "react-router-dom";
import { Segment, Header, Divider, Button } from "semantic-ui-react";

const BlogCard = ({ blog: { author, title, abstract } }) => {
  return (
    <Segment secondary>
      <Header as="h3">{title}</Header>
      <Header as="h4">{author}</Header>
      <Divider />
      <p>{abstract}</p>
      <Button as={NavLink} exact to="/blog">
        Read more
      </Button>
    </Segment>
  );
};

export default BlogCard;