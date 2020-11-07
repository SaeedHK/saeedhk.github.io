import React from "react";
import { NavLink } from "react-router-dom";
import { Segment, Header, Divider, Button } from "semantic-ui-react";

const BlogCard = ({ blog: { author, title, abstract, id } }) => {
  return (
    <Segment.Group vertical>
      <Segment size="big" inverted color="teal">
        {title}
      </Segment>
      <Segment>{abstract}</Segment>
      <Segment basic>
        <Button as={NavLink} exact to={`/blog/${id}`}>
          Read more
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default BlogCard;
