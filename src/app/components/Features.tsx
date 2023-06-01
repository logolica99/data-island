import React from "react";
import FeaturesCard from "./FeaturesCard";

const features = [
  {
    logoSrc: "/assets/dart-board 1.png",
    title: "SKILLED LABELLERS",
    details:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    logoSrc: "/assets/chat 1.png",
    title: "FOCUS ON QUALITY",
    details:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    logoSrc: "/assets/dashboard 1.png",
    title: "EFFICIENT TOOLING",
    details:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    logoSrc: "/assets/money 1.png",
    title: "AFFORDABLE",
    details:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
];

export default function Features() {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-2 mb-24">
      {features.map((feature, index) => (
        <FeaturesCard
          key={index}
          logoSrc={feature.logoSrc}
          title={feature.title}
          details={feature.details}
        />
      ))}
    </div>
  );
}
