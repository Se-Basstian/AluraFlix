/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts, jsx,tsx}"],
  theme: {
    screens: {
      m1340: { max: "1340px" },
      m940: { max: "940px" },
      m760: { max: "760px" },
      m660: { max: "660px" },
      m610: { max: "610px" },
      m430: { max: "430px" },
    },
    extend: {
      fontFamily: {},
    },
  },
  plugins: [],
};
