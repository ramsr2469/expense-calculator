import React, { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

function ExpandableText({ children, maxChars = 100 }: Props) {
  //   {
  //     children.length;
  //   }
  const [isExpanded, setExpanded] = useState(false);
  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <>
      <p>
        {text}...
        <button onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? "LESS" : "MORE"}
        </button>
      </p>
      {/* <button onClick={more}></button> */}
    </>
  );
}

export default ExpandableText;
