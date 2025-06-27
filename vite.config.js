import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  darkMode: 'class',
  server: {
    proxy: {
      '/predict': 'http://localhost:5000',
      '/check': 'http://localhost:5000',
    },
  },
  plugins: [react(), tailwindcss()],
  tailwind: {
    theme: {
      extend: {
        keyframes: {
          scroll: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
        animation: {
          scroll: 'scroll 30s linear infinite',
        },
        screens: {
          '3xl': '1920px',
        },
        spacing: {
          17: '4.25rem',
          140: '35rem',
          175: '43.75rem',
        },
        fontFamily: {
          monoreg: ['"Roboto Mono"', 'monospace'],
        },
      },
    },
  },
});
