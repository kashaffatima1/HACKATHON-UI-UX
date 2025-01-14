<<<<<<< HEAD
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
=======
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
>>>>>>> 4a9e0321b0ce98b0cf7d9797003af9b4425c0ac9
  ],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        background: 'var(--background)',
        foreground: 'var(--foreground)',
=======
        background: "var(--background)",
        foreground: "var(--foreground)",
>>>>>>> 4a9e0321b0ce98b0cf7d9797003af9b4425c0ac9
      },
    },
  },
  plugins: [],
<<<<<<< HEAD
};

export default config;
=======
} satisfies Config;
>>>>>>> 4a9e0321b0ce98b0cf7d9797003af9b4425c0ac9
