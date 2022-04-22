const plugin = require("tailwindcss/plugin");

const colCount = plugin(
  function ({ addUtilities, theme, e }) {
    const values = theme("colCount");
    const utilities = Object.entries(values).map(([key, value]) => {
      return {
        [`.${e(`col-count-${key}`)}`]: { columnCount: `${value}` },
      };
    });
    addUtilities(utilities);
  },
  {
    theme: {
      colCount: {
        2: "2",
        3: "3",
        4: "4",
      },
    },
  }
);
module.exports = colCount;
