/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{njk,md}', './src/**/*.svg'],
    theme: {
        screens: {
            'sm': '768px',
            'md': '1024px',
            'lg': '1440px',
        },
        colors: {
            'primary': '#BB52ED',
            'primary-lighter': '#D0ABDE',
            'accent': '#5FBAB0',
            'background': '#140E25',
            'decorative': '#351B4D',
            'text-primary': '#F0F0F0',
            'text-secondary': '#B3B3B3',
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif']
        },
        extend: {},
    },
    plugins: [],
};
