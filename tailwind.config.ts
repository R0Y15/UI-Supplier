import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				'p-orange': {
					DEFAULT: '#E7770D'
				},
				'p-green': {
					DEFAULT: '#00732F'
				},
				'p-green-light': {
					DEFAULT: '#15803d'
				},
				'p-blue-light': {
					DEFAULT: '#E8FBFF'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			textStyle: {
				'poppins': {
					'thin': {
						fontFamily: 'Poppins, sans-serif',
						fontWeight: '100',
					},
					'extralight': {
						fontFamily: 'Poppins, sans-serif',
						fontWeight: '200',
					},
					'light': {
						fontFamily: 'Poppins, sans-serif',
						fontWeight: '300',
					},
					'regular': {
						fontFamily: 'Poppins, sans-serif',
						fontWeight: '400',
					},
					'medium': {
						fontFamily: 'Poppins, sans-serif',
						fontWeight: '500',
					},
					'semibold': {
						fontFamily: 'Poppins, sans-serif',
						fontWeight: '600',
					},
					'bold': {
						fontFamily: 'Poppins, sans-serif',
						fontWeight: '700',
					},
					'extrabold': {
						fontFamily: 'Poppins, sans-serif',
						fontWeight: '800',
					},
					'black': {
						fontFamily: 'Poppins, sans-serif',
						fontWeight: '900',
					},
				},
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
