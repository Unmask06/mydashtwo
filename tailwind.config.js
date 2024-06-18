/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./mydashtwo/pages/**/*.py", // scans all Python files in the pages directory
    "./mydashtwo/components/**/*.py", // scans all Python files in the components directory
    "./mydashtwo/app/**/*.py", // scans all Python files in the app directory
    "./mydashtwo/app.py", // scans all Python files in the lib directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
