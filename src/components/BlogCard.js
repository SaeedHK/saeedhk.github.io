import React from "react";
import { NavLink } from "react-router-dom";
import { Segment, Button } from "semantic-ui-react";

const BlogCard = ({ blog: { title, abstract, id } }) => {
  return (
    <Segment.Group raised>
      <Segment size="big" inverted color="teal">
        {title}
      </Segment>
      <Segment>
        <p>{abstract}</p>
        <Button color="teal" as={NavLink} exact to={`/blog/${id}`}>
          Read more
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default BlogCard;
