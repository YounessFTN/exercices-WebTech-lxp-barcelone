import daisyUI from "./node_modules/daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  themes: [
    {
      mytheme: {
        primary: "#1c1917",

        secondary: "#a8a29e",

        accent: "#ef4444",

        neutral: "#1c1917",

        "base-100": "#f5f5f4",

        info: "#d6d3d1",

        success: "#16a34a",

        warning: "#fbbf24",

        error: "#e11d48",
      },
    },
  ],
  plugins: [daisyUI],
};
