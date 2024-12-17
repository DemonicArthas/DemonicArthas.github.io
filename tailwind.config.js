/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [daisyui, typography],
  daisyui: {
    themes: ['light', 'dark'],
  },
};
