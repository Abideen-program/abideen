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
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 8px, #1b1b1b 100px);",
      },
    },
    screens: {
      sm: "426px",
      // => @media (min-width: 426px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "976px",
      // => @media (min-width: 976px) { ... }

      xl: "1024px",
      // => @media (min-width: 1024px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "2560px",
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
export default config;
