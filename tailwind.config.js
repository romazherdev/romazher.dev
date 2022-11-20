/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{njk,md}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '10px',
                sm: '20px',
                md: '52px',
                lg: '150px',
            },
        },
        screens: {
            sm: '768px',
            md: '1024px',
            lg: '1440px',
        },
        colors: {
            transparent: 'transparent',
            primary: {
                400: '#D0ABDE',
                700: '#BB52ED',
            },
            accent: '#1772C6',
            background: '#EBEDF3',
            decorative: '#D8AFF1',
            'font-primary': '#140E25',
            'font-secondary': '#3C3945',
            dark: {
                accent: '#5FBAB0',
                background: '#140E25',
                decorative: '#351B4D',
                'font-primary': '#F0F0F0',
                'font-secondary': '#B3B3B3',
            },
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
};