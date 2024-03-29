import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        firstBlue: '#96B9D0', //primaryBlue
        secondBlue: '#005377',
        thirdBlue: '#12293D',
      },
      fontFamily: {
        'roboto-slab-100': ['Roboto Slab Thin', 'sans-serif'],
        'roboto-slab-200': ['Roboto Slab ExtraLight', 'sans-serif'],
        'roboto-slab-300': ['Roboto Slab Light', 'sans-serif'],
        'roboto-slab-400': ['Roboto Slab Regular', 'sans-serif'],
        'roboto-slab-500': ['Roboto Slab Medium', 'sans-serif'],
        'roboto-slab-600': ['Roboto Slab SemiBold', 'sans-serif'],
        'roboto-slab-700': ['Roboto Slab Bold', 'sans-serif'],
        'roboto-slab-800': ['Roboto Slab ExtraBold', 'sans-serif'],
        'roboto-slab-900': ['Roboto Slab Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
