import React from "react";

const Type = ({item}) => {
  return <li className="font-bold text-white text-3xl">- {item.type.name}</li>;
};

export default Type;
