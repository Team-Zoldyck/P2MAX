module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        green: "#41dc65;",
        matic: "#05377f;",
        subtle: "#F7F7FA",
        secondary: "#2B54E4"
      },
      boxShadow: {
        nav: "0 12px 40px rgba(128, 128, 128, 0.1)",
      },
      fontFamily: {
        workSans: ['"Work sans"', "sans-serif"],
      },
    },
    fontSize: {
      "3xl": [
        "32px",
        {
          lineHeight: "37.5px",
        },
      ],
    },
  },
  plugins: [],
};
