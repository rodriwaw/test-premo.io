/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',

    },
    extend: {
      opacity: {
        '15': '.15',
      },
      colors: {
        'american-silver': '#d1d1d1',
        'flash-white': '#f1f1f2',
        'white': '#ffffff',
        'smoky-black': '#0c0c0f',
        'black': '#000000',
        'primary': {
          800: '#14213d',
          900: '#0a142f',
        },
        'secondary': {
          50: '#ecfdf3',
          500: '#027a48',
        },
        'regal-blue': {
          50: '#f0faff',
          100: '#dcf2ff',
          200: '#b2e8ff',
          300: '#6dd6ff',
          400: '#20c2ff',
          500: '#00aaff',
          600: '#0088df',
          700: '#006bb4',
          800: '#005b94',
          900: '#00416a',
          950: '#002f51',
        },
        'atlantis': {
          50: '#f8fbea',
          100: '#eff6d1',
          200: '#deeda9',
          300: '#c6df77',
          400: '#adcf4c',
          500: '#9fc733',
          600: '#708f21',
          700: '#556e1d',
          800: '#45571d',
          900: '#3b4b1c',
          950: '#1e290a',
        },
        'woodsmoke': {
          50: '#f6f6f7',
          100: '#e0e2e7',
          200: '#c1c4ce',
          300: '#9b9ead',
          400: '#75778c',
          500: '#5b5d71',
          600: '#484959',
          700: '#3c3d49',
          800: '#32333d',
          900: '#2d2d34',
          950: '#101014',
        },
        'purple-heart': {
          50: '#eeefff',
          100: '#e0e1ff',
          200: '#c6c7ff',
          300: '#a6a4fd',
          400: '#8d80f9',
          500: '#7961f3',
          600: '#6d44e7',
          700: '#5b33c7',
          800: '#4d2fa4',
          900: '#412d82',
          950: '#281a4c',
        },
      },
      spacing: {
        '18': '4.5rem'
      }
    },
  },
  plugins: [],
}