import React from "react";

export default function Title({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) {
  return (
    <div className="py-8">
      <h2 className="text-xl font-medium text-primaryBlue md:text-2xl">
        {primary}
      </h2>
      <h2 className="mt-2 text-2xl font-extrabold md:text-4xl">
        {secondary.split(",")[0]}
        <br />
        {secondary.split(",")[1]}
      </h2>
    </div>
  );
}
