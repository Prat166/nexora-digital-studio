/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#06070b', 900: '#0a0b10', 800: '#11131b', 700: '#191c27', 600: '#252937' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-14px)' } },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
        cube: { to: { transform: 'rotateX(360deg) rotateY(360deg)' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spinSlow 24s linear infinite',
        cube: 'cube 22s linear infinite',
      },
    },
  },
  plugins: [],
};
