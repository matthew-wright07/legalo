/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#5F66C9",
        hover:"#4A50A3",
        background:"#E5E7EB",
        secondary:"#00bf63",
        secondaryhover:"#029f54",
      },
    },
  },
  plugins: [],
};
