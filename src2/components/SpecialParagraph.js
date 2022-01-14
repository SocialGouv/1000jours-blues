import React from "react";

const SpecialParagraph = ({ content }) => {
  return (
    <p style={{ padding: "4px 32px", borderLeft: "5px solid darkblue" }}>
      {content}
    </p>
  );
};

export default SpecialParagraph;
