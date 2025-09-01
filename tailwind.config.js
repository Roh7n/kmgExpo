/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [ "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        'nunito-black': ['Nunito-Black', 'sans-serif'],
        'nunito-bold': ['Nunito-Bold', 'sans-serif'],
        'nunito-extrabold': ['Nunito-ExtraBold', 'sans-serif'],
        'nunito-light': ['Nunito-Light', 'sans-serif'],
        'nunito-medium': ['Nunito-Medium', 'sans-serif'],
        'nunito-regular': ['Nunito-Regular', 'sans-serif'],
        'nunito-semibold': ['Nunito-SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}