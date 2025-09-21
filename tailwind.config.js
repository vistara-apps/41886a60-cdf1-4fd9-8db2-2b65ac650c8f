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
        bg: 'hsl(220 20% 15%)',
        accent: 'hsl(30 90% 60%)',
        primary: 'hsl(220 80% 50%)',
        surface: 'hsl(220 20% 20%)',
        textPrimary: 'hsl(0 0% 95%)',
        textSecondary: 'hsl(0 0% 70%)',
      },
      borderRadius: {
        'lg': '20px',
        'md': '12px',
        'sm': '8px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
        'xl': '32px',
      },
      boxShadow: {
        'card': '0 6px 18px hsla(0, 0%, 0%, 0.2)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
    },
  },
  plugins: [],
}
