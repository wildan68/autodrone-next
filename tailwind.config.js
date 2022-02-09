module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'dark-white': '#F7F8FA',
            'gray': '#969696',
            'black': '#000000',
            'blue': '#2E4DEC',
            'dark-blue': '#2238a8',
        },
        screens: {
            'md': { 'max': '768px' },
        }
    },
    plugins: [],
}