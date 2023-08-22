
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#272238",
        orange: "#FFB938",
        darkBlue: "#ECECF8",
        skyblue: "#44F4FF",
        maincolor: "#1D182C",
        photos: "#535060",
      },
      width: {
        '1/10': '10%',
        '1.5/10': '15%',
        '1.7/10': '17%',
        '1.8/10': '18%',
        '1.9/10':'19%',
        '2/10': '20%', 
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10/10': '100%',
      },
      margin: {
        '30': '7.5rem', 
      },
    
    },
  },
  plugins: [],
}