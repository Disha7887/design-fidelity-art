/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive'],
      },
      animation: {
        'dark-float-1': 'darkFloat1 20s ease-in-out infinite',
        'dark-float-2': 'darkFloat2 25s ease-in-out infinite',
        'dark-float-3': 'darkFloat3 30s ease-in-out infinite',
        'dark-float-4': 'darkFloat4 22s ease-in-out infinite',
        'dark-float-5': 'darkFloat5 28s ease-in-out infinite',
        'dark-float-6': 'darkFloat6 35s ease-in-out infinite',
        'particle-1': 'particle1 15s ease-in-out infinite',
        'particle-2': 'particle2 20s ease-in-out infinite',
        'particle-3': 'particle3 25s ease-in-out infinite',
        'particle-4': 'particle4 18s ease-in-out infinite',
        'particle-5': 'particle5 22s ease-in-out infinite',
        'particle-6': 'particle6 30s ease-in-out infinite',
        'line-1': 'line1 10s ease-in-out infinite',
        'line-2': 'line2 12s ease-in-out infinite',
        'line-3': 'line3 15s ease-in-out infinite',
      },
      keyframes: {
        darkFloat1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.1' },
          '25%': { transform: 'translate(50px, -30px) scale(1.1)', opacity: '0.15' },
          '50%': { transform: 'translate(-30px, 50px) scale(0.95)', opacity: '0.1' },
          '75%': { transform: 'translate(40px, 20px) scale(1.05)', opacity: '0.12' },
        },
        darkFloat2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.15' },
          '33%': { transform: 'translate(-60px, 40px) scale(1.15)', opacity: '0.2' },
          '66%': { transform: 'translate(40px, -60px) scale(0.9)', opacity: '0.15' },
        },
        darkFloat3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.12' },
          '20%': { transform: 'translate(70px, 30px) scale(1.2)', opacity: '0.18' },
          '40%': { transform: 'translate(-50px, -40px) scale(0.85)', opacity: '0.12' },
          '60%': { transform: 'translate(30px, 60px) scale(1.1)', opacity: '0.15' },
          '80%': { transform: 'translate(-40px, -20px) scale(0.95)', opacity: '0.12' },
        },
        darkFloat4: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.08' },
          '50%': { transform: 'translate(-80px, -50px) scale(1.25)', opacity: '0.12' },
        },
        darkFloat5: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.1' },
          '25%': { transform: 'translate(60px, -70px) scale(0.8)', opacity: '0.08' },
          '50%': { transform: 'translate(-70px, 30px) scale(1.3)', opacity: '0.15' },
          '75%': { transform: 'translate(50px, 50px) scale(0.9)', opacity: '0.1' },
        },
        darkFloat6: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.08' },
          '30%': { transform: 'translate(-90px, 60px) scale(1.35)', opacity: '0.12' },
          '60%': { transform: 'translate(80px, -80px) scale(0.75)', opacity: '0.08' },
          '90%': { transform: 'translate(-30px, 40px) scale(1.15)', opacity: '0.1' },
        },
        particle1: {
          '0%, 100%': { transform: 'translate(0, 0)', opacity: '0.2' },
          '50%': { transform: 'translate(200px, -150px)', opacity: '0.4' },
        },
        particle2: {
          '0%, 100%': { transform: 'translate(0, 0)', opacity: '0.3' },
          '50%': { transform: 'translate(-180px, 200px)', opacity: '0.5' },
        },
        particle3: {
          '0%, 100%': { transform: 'translate(0, 0)', opacity: '0.4' },
          '50%': { transform: 'translate(150px, 180px)', opacity: '0.6' },
        },
        particle4: {
          '0%, 100%': { transform: 'translate(0, 0)', opacity: '0.25' },
          '50%': { transform: 'translate(-220px, -160px)', opacity: '0.45' },
        },
        particle5: {
          '0%, 100%': { transform: 'translate(0, 0)', opacity: '0.35' },
          '50%': { transform: 'translate(190px, -190px)', opacity: '0.55' },
        },
        particle6: {
          '0%, 100%': { transform: 'translate(0, 0)', opacity: '0.3' },
          '50%': { transform: 'translate(-160px, 170px)', opacity: '0.5' },
        },
        line1: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'translateY(100vh) rotate(180deg)', opacity: '0.2' },
        },
        line2: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'translateY(100vh) rotate(-180deg)', opacity: '0.3' },
        },
        line3: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0.25' },
        },
      },
    },
  },
  plugins: [],
}

