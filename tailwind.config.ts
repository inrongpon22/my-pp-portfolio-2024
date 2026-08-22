import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
	darkMode: "class",
	// darkMode: ["selector", "class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			...defaultTheme.screens,
			nav: "860px",
		},
		extend: {
			maxWidth: {
				"8xl": "90rem",
			},
			fontFamily: {
				mono: ["var(--font-jetbrains-mono)", ...defaultTheme.fontFamily.mono],
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			textShadow: {
				"orange-400":
					"0 0 8px var(--tw-shadow-color, #fb923c), 0 0 15px var(--tw-shadow-color, #fb923c)",
				"orange-500":
					"0 0 10px var(--tw-shadow-color, #f97316), 0 0 20px var(--tw-shadow-color, #f97316)",
				glow: "0 0 10px var(--tw-shadow-color, currentColor), 0 0 20px var(--tw-shadow-color, currentColor)",
			},
			colors: {
				"primary-bg": "#353839",
				"primary-text": "#C0C0C0",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
				pf: {
					bg: "var(--pf-bg)",
					panel: "var(--pf-panel)",
					raise: "var(--pf-raise)",
					line: "var(--pf-line)",
					lineSoft: "var(--pf-line-soft)",
					ink: "var(--pf-ink)",
					body: "var(--pf-body)",
					muted: "var(--pf-muted)",
					dim: "var(--pf-dim)",
					faint: "var(--pf-faint)",
					accent: "var(--pf-accent)",
					accentHi: "var(--pf-accent-hi)",
					amber: "var(--pf-amber)",
					stripeA: "var(--pf-stripe-a)",
					stripeB: "var(--pf-stripe-b)",
				},
			},
			keyframes: {
				marquee: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				},
				"marquee-vertical": {
					from: { transform: "translateY(0)" },
					to: { transform: "translateY(calc(-100% - var(--gap)))" },
				},
				blink: {
					"0%, 60%": { opacity: "1" },
					"61%, 100%": { opacity: "0.15" },
				},
			},
			animation: {
				marquee: "marquee var(--duration) linear infinite",
				"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
				blink: "blink 2.4s steps(1) infinite",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [
		require("daisyui"),
		function ({ addUtilities, theme, e }: any) {
			const textShadows = theme("textShadow")
			const utilities = Object.entries(textShadows).map(([key, value]: any) => {
				return {
					[`.${e(`text-shadow-${key}`)}`]: {
						textShadow: value,
					},
				}
			})
			addUtilities(utilities)
		},
		require("tailwindcss-animate"),
	],
}
export default config
