/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'deep-space': '#0F0E2E',
        'deep-space-light': '#1A1940',
        'deep-space-lighter': '#252452',
        'electric-violet': '#7C3AED',
        'electric-violet-dark': '#6D28D9',
        'electric-violet-light': '#8B5CF6',
        'neon-cyan': '#06D6A0',
        'neon-cyan-dark': '#05B588',
        'solar-gold': '#FFD166',
        'solar-gold-dark': '#F0C050',
        'coral-energy': '#EF476F',
        'coral-energy-dark': '#DC2F57',
        'cloud-white': '#F8F9FC',
        'cloud-dim': '#A0A3B1',
        'card-bg': 'rgba(26, 25, 64, 0.7)',
        'card-border': 'rgba(124, 58, 237, 0.2)',
      },
      fontFamily: {
        'display': ['"Space Grotesk"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
        'body': ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'glow-violet': '0 0 20px rgba(124, 58, 237, 0.3)',
        'glow-cyan': '0 0 20px rgba(6, 214, 160, 0.3)',
        'glow-gold': '0 0 20px rgba(255, 209, 102, 0.3)',
        'glow-coral': '0 0 20px rgba(239, 71, 111, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'pop': 'pop 0.3s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'liquid-fill': 'liquidFill 1s ease-out',
        'particle-burst': 'particleBurst 0.6s ease-out forwards',
        'toast-in': 'toastIn 0.4s ease-out',
        'toast-out': 'toastOut 0.3s ease-in forwards',
        'companion-idle': 'companionIdle 2s ease-in-out infinite',
        'companion-excited': 'companionExcited 0.4s ease-in-out 3',
        'star-twinkle': 'starTwinkle 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(124, 58, 237, 0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(124, 58, 237, 0.6)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pop: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        liquidFill: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--fill-width, 100%)' },
        },
        particleBurst: {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'scale(1.5) rotate(180deg)', opacity: '0' },
        },
        toastIn: {
          '0%': { transform: 'translateX(100%) scale(0.8)', opacity: '0' },
          '100%': { transform: 'translateX(0) scale(1)', opacity: '1' },
        },
        toastOut: {
          '0%': { transform: 'translateX(0) scale(1)', opacity: '1' },
          '100%': { transform: 'translateX(100%) scale(0.8)', opacity: '0' },
        },
        companionIdle: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-3px) rotate(-2deg)' },
          '75%': { transform: 'translateY(-3px) rotate(2deg)' },
        },
        companionExcited: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-8px) scale(1.1)' },
        },
        starTwinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
};
