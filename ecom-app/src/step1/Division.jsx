import React from "react";

const Division = ({ x, y }) => {
  return <h3>Division: {y !== 0 ? x / y : "Cannot divide by zero"}</h3>;
};

export default Division;