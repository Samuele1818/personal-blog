/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./lib/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                dark: '#1f1926',
                secondaryDark: '#352e3d',
                light: '#f5f0f0',
                main: '#341f62',
                mainDark: '#b79fe7',
                secondary: '#51014c',
                third: '#6d140a'
            },
            boxShadow: {
                shadow: '0 8px 40px 14px rgba(32, 32, 32, 0.12)',
                soft: '0 8px 40px 5px rgba(32, 32, 32, 0.05)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}
