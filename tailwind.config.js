const plugin = require('tailwindcss-textshadow');

module.exports = {
  theme: {
    extend: {
      boxShadow: {
        "emerald-glow": "0 4px 20px rgba(16, 185, 129, 0.5)",
        "text-glow": "0 0 10px rgba(99, 102, 241, 0.5)",
      },
    },
  },
  plugins: [plugin],
};
