/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      montserrat: ["var(--font-montserrat)"],
      akrobat: ["var(--font-akrobat)", ...fontFamily.sans],
    },
    colors: {
      primaryBlue: "#11577A",
    },
  },
};
export const plugins = [];
