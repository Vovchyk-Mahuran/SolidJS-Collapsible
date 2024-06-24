import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateRows: {
        '0': '0fr',
        '1': '1fr',
      }
    }
  },
  plugins: [],
};

export default config;
