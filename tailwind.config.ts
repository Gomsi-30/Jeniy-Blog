import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    container:{
      center:true,
      padding: {
        DEFAULT:'1rem',
        xs:'2rem',
        sm: '2rem',     
        md: '3rem',     
        lg: '1rem',     
        xl: '8rem',     
        '2xl': '10rem',
      },
    },
    extend: {
      colors: {
        customGray: '#121221',
      },
      backgroundImage: {
        'blog1' : "url('/blog2png.png')",
      },
    },
  },
  plugins: [
    
  ],
};
export default config;
