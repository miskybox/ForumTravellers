import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui, // Agrega DaisyUI a los plugins
  ],
}



