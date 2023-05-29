"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Menu from "./Menu";
export default function Nav() {
  const [menu, setMenu] = useState(false);
  return (
    <div
      className={`${
        menu && "fixed"
      }   flex min-h-[10vh] w-full items-center justify-between bg-white px-8`}
    >
      <Menu open={menu} />
      <div className="flex w-[200px] items-center gap-2 md:w-[250px] ">
        <img alt="" src="/assets/pie-chart 1.png" />
        <svg
          width="232"
          height="20"
          viewBox="0 0 232 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.927734 0.651344V4.05497H8.74245V19.7116H12.1461V4.05497H19.9608V0.651344H0.927734Z"
            fill="#1F5C93"
          />
          <path
            d="M36.429 0.651344V7.54027H24.176V0.624115H20.7996V19.6844H24.176V10.9439H36.429V19.6844H39.8326V0.651344H36.429Z"
            fill="#1F5C93"
          />
          <path
            d="M45.7904 4.02774H59.7044V0.624115H45.7904C42.9586 0.624115 40.6714 2.93858 40.6714 5.79762V14.5381C40.6714 17.3972 42.9586 19.7116 45.7904 19.7116H59.7044V16.308H45.7904C44.8374 16.308 44.0478 15.5184 44.0478 14.5381V10.9439H56.3008V7.54027H44.0478V5.79762C44.0478 4.81738 44.8374 4.02774 45.7904 4.02774Z"
            fill="#1F5C93"
          />
          <path
            d="M76.0797 0.651344H66.5495V19.6844H76.0797C78.6937 19.6844 81.0626 18.6225 82.778 16.907C82.9958 16.7164 83.1592 16.4986 83.3226 16.308C84.7385 14.647 85.5826 12.4959 85.5826 10.1543C85.5826 4.89906 81.3076 0.651344 76.0797 0.651344ZM76.0797 16.308H69.9259V4.02774H76.0797C79.4288 4.02774 82.179 6.77786 82.179 10.1543C82.179 13.5579 79.4288 16.308 76.0797 16.308Z"
            fill="#1F5C93"
          />
          <path
            d="M100.611 16.2808L92.6325 0.624115L84.6545 16.2808L82.939 19.7116H86.7511L92.6325 8.13931L96.7986 16.2808L98.5412 19.7116H102.353L100.611 16.2808Z"
            fill="#1F5C93"
          />
          <path
            d="M96.7205 0.651344V4.05497H104.535V19.7116H107.939V4.05497H115.754V0.651344H96.7205Z"
            fill="#1F5C93"
          />
          <path
            d="M127.777 16.2808L119.799 0.624115L111.821 16.2808L110.105 19.7116H113.917L119.799 8.13931L123.965 16.2808L125.707 19.7116H129.519L127.777 16.2808Z"
            fill="#1F5C93"
          />
          <path
            d="M138.815 19.6844V0.651344H135.439V19.6844H138.815Z"
            fill="#1F5C93"
          />
          <path
            d="M157.647 5.87931V5.79762C157.647 2.93858 155.36 0.624115 152.501 0.624115H144.768C141.936 0.624115 139.649 2.93858 139.649 5.79762V5.87931C139.649 6.96846 139.975 7.97594 140.547 8.82003C140.738 9.09232 140.983 9.36461 141.228 9.60967C142.126 10.5082 143.379 11.0528 144.768 11.0528H151.629C153.073 11.0528 154.271 12.2237 154.271 13.6668C154.271 15.1099 153.073 16.2808 151.629 16.2808H145.666C144.196 16.2808 143.025 15.1099 143.025 13.6668H139.649C139.649 16.9887 142.317 19.6844 145.666 19.6844H151.629C154.951 19.6844 157.647 16.9887 157.647 13.6668C157.647 12.2237 157.157 10.9167 156.286 9.85474C156.231 9.77305 156.149 9.69136 156.068 9.60967C154.979 8.38437 153.399 7.62196 151.629 7.62196H144.768C143.815 7.62196 143.025 6.85955 143.025 5.87931V5.79762C143.025 4.81738 143.815 4.05497 144.768 4.05497H152.501C153.481 4.05497 154.271 4.81738 154.271 5.79762V5.87931H157.647Z"
            fill="#1F5C93"
          />
          <path
            d="M164.202 16.2808C162.976 16.1446 162.023 15.1644 161.86 13.9663V0.624115H158.483V13.6123C158.483 14.5926 158.701 15.4911 159.11 16.2808C159.682 17.5061 160.662 18.4863 161.86 19.0581C162.677 19.4666 163.575 19.6844 164.528 19.6844H174.195V16.2808H164.202Z"
            fill="#1F5C93"
          />
          <path
            d="M191.587 16.2808L183.609 0.624115L175.631 16.2808L173.916 19.7116H177.728L183.609 8.13931L187.775 16.2808L189.518 19.7116H193.33L191.587 16.2808Z"
            fill="#1F5C93"
          />
          <path
            d="M208.725 0.624115V12.7682L196.499 3.31978L193.095 0.705802V19.7116H196.499V7.62196L208.725 17.0704L212.155 19.7116V0.624115H208.725Z"
            fill="#1F5C93"
          />
          <path
            d="M222.497 0.651344H212.967V19.6844H222.497C225.111 19.6844 227.48 18.6225 229.195 16.907C229.413 16.7164 229.577 16.4986 229.74 16.308C231.156 14.647 232 12.4959 232 10.1543C232 4.89906 227.725 0.651344 222.497 0.651344ZM222.497 16.308H216.343V4.02774H222.497C225.846 4.02774 228.596 6.77786 228.596 10.1543C228.596 13.5579 225.846 16.308 222.497 16.308Z"
            fill="#1F5C93"
          />
        </svg>
      </div>
      <div className="lg:hidden">
        <button
          className="cursor-pointer"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <RxHamburgerMenu className="text-3xl " />
        </button>
      </div>

      <div className="hidden flex-1 items-center justify-end gap-6 lg:flex">
        <Link
          href={""}
          className="text-sm font-medium transition duration-150 ease-in-out hover:opacity-70 lg:text-base"
        >
          SERVICES
        </Link>
        <Link
          href={""}
          className="text-sm font-medium transition duration-150 ease-in-out hover:opacity-70 lg:text-base"
        >
          PRICING
        </Link>
        <Link
          href={""}
          className="text-sm font-medium transition duration-150 ease-in-out hover:opacity-70 lg:text-base"
        >
          CASE STUDIES
        </Link>
        <Link
          href={""}
          className="text-sm font-medium transition duration-150 ease-in-out hover:opacity-70 lg:text-base"
        >
          BLOG
        </Link>
        <Link
          href={""}
          className="text-sm font-medium transition duration-150 ease-in-out hover:opacity-70 lg:text-base"
        >
          ABOUT US
        </Link>
        <Link
          href={""}
          className="rounded-full bg-primaryBlue px-8 py-2 text-sm font-bold text-white transition duration-150 ease-in-out hover:opacity-70 lg:text-base"
        >
          CONTACT US
        </Link>
      </div>
    </div>
  );
}
