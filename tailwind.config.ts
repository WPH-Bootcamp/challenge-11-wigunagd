import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:'media',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        // Custom spacing with 1px ratio (1:1 instead of 1:4)
        // p-1 = 1px, p-4 = 4px, p-16 = 16px
/*         '0': '0px',
        '1': '1px',
        '2': '2px',
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px' */
      },
      typography: {
        // Extended typography classes
        "display-2xl-bold": {
          fontSize: "4.5rem",
          fontWeight: "700",
          lineHeight: "1.1",
        },
      },
      colors: {
        // Design system colors will be defined in globals.css
      },
    },
  },
  plugins: [],
};

export default config;
