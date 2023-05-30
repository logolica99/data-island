import React from "react";

export default function PrevWork({
  imageSrc,
  title,
}: {
  imageSrc: string;
  title: string;
}) {
  return (
    <div>
      <img src={imageSrc} alt={title} className="w-[400px]" />
      <h2 className="mt-2 text-xl font-bold">{title}</h2>
    </div>
  );
}
