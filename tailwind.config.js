module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Comics Sans',
    },
    container: {
      padding: {
        DEFAULT: '2rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
      colors: {
        primary: 'gray',
        secondary: 'black',
        tertiary: 'white',
        accent: {
          DEFAULT: 'black',
          hover: 'white',
        },
        paragraph: 'black',
      },
    },
  },
  plugins: [],
};
