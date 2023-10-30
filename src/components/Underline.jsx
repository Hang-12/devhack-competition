import React from "react";

const Underline = ({ width }) => {
  return (
    <div
      className={`${
        width ? `border-b-${width}` : `border-b`
      } border-underline-color`}
    ></div>
  );
};

export default Underline;