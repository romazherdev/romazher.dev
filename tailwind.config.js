/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{njk,md,html}'],
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
            primary: 'var(--primary)',
            secondary: 'var(--secondary)',
            accent: 'var(--accent)',
            background: 'var(--background)',
            'font-primary': 'var(--font-primary)',
            'font-secondary': 'var(--font-secondary)',
            decorative: 'var(--decorative)',
            pink: {
                300: '#d0abde',
                400: '#d8aff1',
                700: '#bb52ed',
            },
            grey: {
                400: '#b3b3b3',
                900: '#3c3945',
            },
            blue: '#1772c6',
            white: '#ebedf3',
            black: '#140e25',
            green: '#5fbab0',
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
};
