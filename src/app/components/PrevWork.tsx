import React from "react";

export default function PrevWork({
  imageSrc,
  title,
}: {
  imageSrc: string;
  title: string;
}) {
  return (
    <div className="bg-white rounded-xl ">
      <img src={imageSrc} alt={title} className="rounded-ss-xl w-full rounded-se-xl" />
      <h2 className="mt-2  font-bold p-4 lg:text-2xl">{title}</h2>
    </div>
  );
}
