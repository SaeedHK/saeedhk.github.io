import React from "react";
import { InlineMath, BlockMath } from "react-katex";
const Math = ({ inline, children }) => {
  if (inline) {
    return (
      <div style={{ fontSize: "1.33em" }}>
        <InlineMath>{children}</InlineMath>
      </div>
    );
  } else {
    return (
      <div style={{ fontSize: "1.5em" }}>
        <BlockMath>{children}</BlockMath>
      </div>
    );
  }
};

export default Math;
