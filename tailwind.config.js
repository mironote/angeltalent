/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx,css}',
        './components/**/*.{js,ts,jsx,tsx,mdx,css}',
    ],
    separator: '_',

    theme: {
        colors: {
            white: '#fff',
            gray: 'rgb(169, 169, 169)',
            dark: 'rgb(22, 22, 22)',
        },
        fontFamily: {
            sans: [
                'Quicksand',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Ubuntu',
                'sans-serif',
            ],
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
