import React from "react";
import { UpperBar } from "semantic-ui-react";

const UpperBar = () => (
  <Segment
    style={{
      backgroundImage: `url(${backgroundSVG})`,
      backgroundRepeat: "no-repeat",
      minHeight: 75,
      padding: "1em 0em",
      marginBottom: "3em",
    }}
    vertical
  ></Segment>
);

export default UpperBar;
