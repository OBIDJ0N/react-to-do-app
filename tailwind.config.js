/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '100%',
        md: '100%',
        xl: '1470px',
      },
    },
    screens: {
      'xs': '400px',
      'sm': '500px',
      'md': '768px',
    },
    fontSize: {
      base: ['18px']
    },
    colors: {
      // Primary 
      brightBlue: 'hsl(220, 98%, 61%)',
      bgTransparent: 'transparent',
      // Light theme
      light: {
        veryLightGray: 'hsl(0, 0%, 98%)',
        veryLightGrayishBlue: 'hsl(236, 33%, 92%)',
        lightGrayishBlue: 'hsl(233, 11%, 84%)',
        darkGrayishBlue: 'hsl(236, 9%, 61%)',
        veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
      },
      // Dark theme
      dark: {
        veryDarkBlue: 'hsl(235, 21%, 11%)',
        veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
        lightGrayishBlue: 'hsl(234, 39%, 85%)',
        lightGrayishBlue2: 'hsl(236, 33%, 92%)',
        darkGrayishBlue: 'hsl(234, 11%, 52%)',
        veryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
        veryDarkGrayishBlue2: 'hsl(237, 14%, 26%) ',
      }
    },
    extend: {
      fontFamily: {
        joseFin: 'Josefin Sans',
      },
      backgroundImage: theme => ({
        checkBackground: 'linear-gradient(90deg, white, white), linear-gradient(90deg, hsl(289, 65%, 64%), hsl(226, 78%, 67%))',
        'desktop-dark': "url('/src/assets/images/bg-desktop-dark.jpg')",
        'desktop-light': "url('/src/assets/images/bg-desktop-light.jpg')",
        'mobile-dark': "url('/src/assets/images/bg-mobile-dark.jpg')",
        'mobile-light': "url('/src/assets/images/bg-mobile-light.jpg')",
      }),
      boxShadow: {
        'shadow': '0 4px 4px rgba(0, 0, 0, 0.25)'
      },
    },
  },
  plugins: [],
}