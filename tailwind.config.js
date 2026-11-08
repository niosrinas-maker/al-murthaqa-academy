/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: "#06281F",
          900: "#0B3B2E",
          800: "#0F4F3C",
          700: "#14634B",
          600: "#1B7A5C",
          100: "#DDEFE7",
          50: "#F0F8F4",
        },
        gold: {
          300: "#E3C77E",
          400: "#D4AF5F",
          500: "#C8A24A",
          600: "#A8832F",
        },
        ink: "#10231C",
        paper: "#FEFDFA",
      },
      fontFamily: {
        display: ['"Noto Serif Malayalam"', "Georgia", "serif"],
        body: ['"Noto Sans Malayalam"', "system-ui", "sans-serif"],
        arabic: ["Amiri", "serif"],
      },
    },
  },
  plugins: [],
};
