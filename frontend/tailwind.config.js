module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        matic: '#05377f;',
      },
      boxShadow: {
        nav: "0 12px 40px rgba(128, 128, 128, 0.1)",
      },
      fontFamily: {
        workSans: ['"Work sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
