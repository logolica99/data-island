import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function LargeFeatureCards({
  title,
  details,
  imgLink,
  left = false,
  link,
}: {
  title: string;
  details: string;
  imgLink: string;
  link?: string;
  left?: boolean;
}) {
  return (
    <div
      className={`flex flex-col  items-center bg-white rounded-xl p-6 justify-between gap-6 ${
        left ? " md:flex-row" : " md:flex-row-reverse"
      } md:p-12 lg:pl-24 lg:gap-12 my-4`}
    >
      <div
        className={`flex-1 md:flex  ${left ? "justify-start" : "justify-end"}`}
      >
        <img src={imgLink} alt="" className="w-full md:w-[80%] min-w-[200px]" />
      </div>

      <div className=" flex flex-col gap-5 flex-1">
        <h2 className="font-akrobat font-extrabold text-4xl text-primaryBlue  lg:text-5xl">
          {title.split(",")[0]}
          <br />
          {title.split(",")[1]}
        </h2>
        <p className="">{details}</p>
        <div className="font-semibold text-sm grid grid-cols-2 justify-between gap-y-5 gap-x-2">
          <p className="text-primaryBlue">CLASSIFICATION</p>
          <p className="text-primaryBlue">LINE SPACING</p>

          <p className="">BOUNDING BOX</p>
          <p className="">BOUNDING BOX</p>

          <p className="">SEGMENTATION</p>
          <p className="">SEGMENTATION</p>

          <p className="">POSE ESTIMATION</p>
          <p className="">POSE ESTIMATION</p>
        </div>
        <div>
          <Link
            href={""}
            className="font-semibold  text-primaryBlue text-lg hover:opacity-80 duration-150 transition ease-in-out"
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
}
