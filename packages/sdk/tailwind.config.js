/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "../../packages/ui/src/**/*.{ts,tsx,js,jsx}", // Thêm đường dẫn tới các component UI
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill-minmax-250": "repeat(auto-fill, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
