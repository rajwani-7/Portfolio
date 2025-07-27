/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'terminal-green': '#00FF00',
        'terminal-bg': '#000000',
        'terminal-cyan': '#00FFFF',
      },
      fontFamily: {
        'mono': ['Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s infinite',
        'tilt': 'tilt 10s infinite linear',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        tilt: {
          '0%': { transform: 'rotateY(0deg)' },
          '25%': { transform: 'rotateY(5deg)' },
          '50%': { transform: 'rotateY(0deg)' },
          '75%': { transform: 'rotateY(-5deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        }
      }
    },
  },
  plugins: [],
}
