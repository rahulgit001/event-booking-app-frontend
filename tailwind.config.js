/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-in-left": "slide-in-left 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-in": "fade-in 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "shimmer": "shimmer 1.5s infinite",
        "border-flow": "border-flow 3s linear infinite",
        "star-twinkle": "star-twinkle 2s ease-in-out infinite",
      },
      keyframes: {
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "border-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "star-twinkle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
      fontSize: {
        "13": "13px",
        "14": "14px",
        "15": "15px",
        "17": "17px",
      },
      boxShadow: {
        "soft": "0 4px 20px -2px rgba(0, 0, 0, 0.08)",
        "medium": "0 8px 30px -5px rgba(0, 0, 0, 0.12)",
        "strong": "0 15px 50px -10px rgba(0, 0, 0, 0.15)",
        "glow": "0 0 25px 5px rgba(255, 107, 107, 0.3)",
        "star-glow": "0 0 30px 10px rgba(255, 215, 0, 0.4)",
      },
    },
  },
  plugins: [],
};