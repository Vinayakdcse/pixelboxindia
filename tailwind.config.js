/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#d94185",
                secondary: "#162038",
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(calc(-50% - 40px))' },
                }
            },
            animation: {
                scroll: 'scroll 20s linear infinite',
            },
        },
    },
    plugins: [],
}
