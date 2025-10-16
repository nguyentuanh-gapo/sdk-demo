/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "../../packages/ui/src/**/*.{js,ts,jsx,tsx}", // Không còn cần thiết, các component UI được xử lý qua SDK
    // "../../packages/sdk/src/**/*.{js,ts,jsx,tsx}", // SDK sẽ được build trước và chỉ phát ra các lớp CSS cần thiết
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // "auto-fill-minmax-280": "repeat(auto-fill, minmax(280px, 1fr))", // Không còn được sử dụng trực tiếp
      },
    },
  },
  plugins: [],
};
