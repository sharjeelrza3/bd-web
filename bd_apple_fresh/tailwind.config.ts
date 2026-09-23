import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bd: {
          dark: "#020617",
          navy: "#07111f",
          cyan: "#22d3ee",
          blue: "#2563eb"
        }
      },
      boxShadow: {
        glow: "0 0 60px rgba(34, 211, 238, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
