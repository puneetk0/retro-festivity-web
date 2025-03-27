
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Retro theme colors
				retro: {
					black: '#121212',
					blue: '#0ff',
					purple: '#b967ff',
					pink: '#ff71ce',
					yellow: '#fffb96',
					green: '#05ffa1',
					red: '#ff4848',
					orange: '#ff8b3d',
					darkblue: '#1a1a2e'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'text-flicker': {
					'0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
					'20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.33' }
				},
				'glow-pulse': {
					'0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 5px rgba(200, 200, 255, 0.5))' },
					'50%': { filter: 'brightness(1.2) drop-shadow(0 0 15px rgba(200, 200, 255, 0.8))' }
				},
				'scanline': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100%)' }
				},
				'grid-flow': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-100%)' }
				},
				'neon-pulse': {
					'0%, 100%': { textShadow: '0 0 4px #fff, 0 0 8px #fff, 0 0 12px #0ff, 0 0 20px #0ff, 0 0 30px #0ff' },
					'50%': { textShadow: '0 0 2px #fff, 0 0 5px #fff, 0 0 8px #0ff, 0 0 12px #0ff, 0 0 20px #0ff' }
				},
				'page-transition-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'page-transition-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(-10px)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'text-flicker': 'text-flicker 4s linear infinite alternate',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'scanline': 'scanline 10s linear infinite',
				'grid-flow': 'grid-flow 20s linear infinite',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'page-transition-in': 'page-transition-in 0.4s ease-out forwards',
				'page-transition-out': 'page-transition-out 0.4s ease-in forwards',
			},
			fontFamily: {
				'retro': ['"Press Start 2P"', 'cursive'],
				'vt323': ['"VT323"', 'monospace'],
				'pixel': ['"Silkscreen"', 'cursive'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
