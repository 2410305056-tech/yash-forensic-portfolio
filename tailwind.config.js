/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030712',
          900: '#050B14',
          850: '#07101E',
          800: '#0A1424',
          700: '#0F1E36',
          600: '#162A4A',
        },
        cyan: {
          accent: '#00d4ff',
          glow: '#00e5ff',
          dim: '#0088aa',
        },
        uv: {
          glow: '#8b5cf6',
          light: '#a78bfa',
        },
        evidence: {
          amber: '#f59e0b',
          crimson: '#ef4444',
          emerald: '#10b981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Orbitron', 'Space Grotesk', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'spin-slow': 'spin 6s linear infinite',
        'bounce-slow': 'bounce 2.5s infinite',
      },
      keyframes: {
        glowPulse: {
          '0%': { boxShadow: '0 0 10px rgba(0, 212, 255, 0.3)' },
          '100%': { boxShadow: '0 0 25px rgba(0, 212, 255, 0.8), 0 0 40px rgba(0, 212, 255, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
