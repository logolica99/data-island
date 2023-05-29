import React from "react";

export default function Title({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) {
  return (
    <div className="py-4">
      <h2 className="text-primaryBlue font-medium text-xl md:text-2xl">{primary}</h2>
      <h2 className="font-extrabold text-2xl md:text-4xl">{secondary}</h2>
    </div>
  );
}
