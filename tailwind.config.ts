import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#1c2b55",
      secondary: "#f5900c",
    },
  },
  plugins: [],
} satisfies Config;
