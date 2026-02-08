/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./App.tsx",
        "./index.tsx",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./constants.ts",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#e8305e",
                "background-light": "#f8f6f6",
                "background-dark": "#211115",
                "surface-light": "#ffffff",
                "surface-dark": "#2d1b20",
                "text-main": "#1b0e11",
                "text-secondary": "#974e60",
            },
            fontFamily: {
                "display": ["Merriweather", "serif"],
                "sans": ["Nunito", "sans-serif"],
                "handwritten": ["Dancing Script", "cursive"]
            },
            borderRadius: {
                "xl": "0.75rem",
                "2xl": "1rem"
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
                'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
                'scale-in': 'scaleIn 0.8s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInRight: {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                fadeInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                }
            },
            boxShadow: {
                "soft": "0 4px 20px -2px rgba(232, 48, 94, 0.08)",
                "card": "0 2px 10px rgba(0,0,0,0.03)",
                "hover-card": "0 20px 40px -5px rgba(232, 48, 94, 0.15)"
            }
        },
    },
    plugins: [],
}
