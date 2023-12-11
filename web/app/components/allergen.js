import React, { useState } from "react";
import Since from "./since";

export default function Allergen({ props, children }) {
  const { name } = props;
  return (
    <div>
      <p className="font-bold text-lg">{name}</p>
      {children}
    </div>
  );
}
