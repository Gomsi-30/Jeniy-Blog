import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#121221', // You can name it anything you like
      },
      backgroundImage: {
        'blog1' : "url('/blog2png.png')",
      },
    },
  },
  plugins: [],
};
export default config;
