/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#17191B',
        graphite: '#25292B',
        ivory: '#F2F0EA',
        copper: '#A66B43',
        'copper-light': '#C1845A',
        'copper-dark': '#8A5535',
        metallic: '#858585',
        'metallic-light': '#A6A6A6',
        'metallic-dark': '#666666',
      },
      fontFamily: {
        sans: ['Vazirmatn', 'Peyda', 'Tahoma', 'sans-serif'],
        display: ['Vazirmatn', 'Peyda', 'Tahoma', 'sans-serif'],
      },
      letterSpacing: {
        'brand': '0.2em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1.2s ease forwards',
        'scroll-dot': 'scrollDot 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollDot: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(10px)', opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
};
