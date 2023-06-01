import React from "react";

type Props = { logoSrc: string; title: string; details: string };

export default function FeaturesCard({ logoSrc, title, details }: Props) {
  return (
    <div className="flex flex-col gap-8 rounded-xl bg-white p-8">
      <img src={logoSrc} alt="" className="w-14" />
      <h3 className="font-akrobat font-extrabold text-primaryBlue text-3xl">{title}</h3>
      <p className="">{details}</p>
    </div>
  );
}
