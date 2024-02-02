import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          100: "#d7d7d7",
          200: "#a8a8a8",
          400: "#4E4E4E",
          500: "#2e2e2e",
          600: "#212121",
          700: "#1c1c1c",
          900: "#0F0F0F"
        },
        primary:{
          light: "#81E6D9",
          dark: "#1B212D"
        }
      }
    },
  },
  plugins: [],
};
export default config;
