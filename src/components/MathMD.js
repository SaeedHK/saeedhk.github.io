import React from "react";
import { InlineMath, BlockMath } from "react-katex";
const MathMD = ({ inline, children }) => {
  const text = children[0];
  if (inline) {
    return (
      <div
        style={{
          marginLeft: "5px",
          marginRight: "5px",
          fontSize: "1em",
          display: "inline",
        }}
      >
        <InlineMath>{text}</InlineMath>
      </div>
    );
  } else {
    return (
      <div style={{ fontSize: "1.5em" }}>
        <BlockMath>{text}</BlockMath>
      </div>
    );
  }
};

export default MathMD;
