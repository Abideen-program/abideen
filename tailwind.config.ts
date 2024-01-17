import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B95328",
        primaryDark: "#58e6d9",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },

      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);",
          circularDark:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #1b1b1b 5px, #1b1b1b 100px);",
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
export default config;
