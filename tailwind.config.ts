import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        'orange-400': '0 0 8px var(--tw-shadow-color, #fb923c), 0 0 15px var(--tw-shadow-color, #fb923c)',
        'orange-500': '0 0 10px var(--tw-shadow-color, #f97316), 0 0 20px var(--tw-shadow-color, #f97316)',
        'glow': '0 0 10px var(--tw-shadow-color, currentColor), 0 0 20px var(--tw-shadow-color, currentColor)',
      },
      colors: {
        'primary-bg': '#353839',
        'primary-text': '#C0C0C0',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme, e }: any) {
      const textShadows = theme('textShadow')
      const utilities = Object.entries(textShadows).map(([key, value]: any) => {
        return {
          [`.${e(`text-shadow-${key}`)}`]: {
            textShadow: value,
          },
        }
      })
      addUtilities(utilities)
    },
  ],
};
export default config;
