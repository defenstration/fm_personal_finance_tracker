import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			'beige-100': 'hsl(30, 36%, 96%)',
  			'beige-500': 'hsl(23, 6%, 57%)',
  			'grey-100': 'hsl(0, 0%, 95%)',
  			'grey-300': 'hsl(0, 0%, 70%)',
  			'grey-500': 'hsl(0, 0%, 41%)',
  			'grey-900': 'hsl(252, 7%, 13%)',
  			'green': 'hsl(177, 52%, 32%)',
  			'yellow': 'hsl(28, 73%, 81%)',
  			'navy': 'hsl(248, 8%, 41%)',
  			'red': 'hsl(7, 58%, 50%)',
  			'purple-1': 'hsl(288, 29%, 62%)',
  			'purple-2': 'hsl(259, 30%, 56%)',
  			'cyan': 'hsl(190, 52%, 68%)',
  			'brown': 'hsl(21, 30%, 44%)',
  			'turquoise': 'hsl(180, 16%, 42%)',
  			'magenta': 'hsl(332, 30%, 44%)',
  			'blue': 'hsl(205, 48%, 47%)',
  			'army': 'hsl(83, 20%, 47%)',
  			'gold': 'hsl(47, 50%, 59%)',
  			'orange': 'hsl(18, 47%, 52%)',
  			'white': 'hsl(0, 0%, 100%)',
  			'navy-grey': 'hsl(214, 11%, 63%)',
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
  		fontSize: {
  			typ1: [
  				'2rem',
  				{
  					lineHeight: '120%',
  					letterSpacing: '0px',
  					fontWeight: 'bold'
  				}
  			],
  			typ2: [
  				'1.25rem',
  				{
  					lineHeight: '120%',
  					letterSpacing: '0px',
  					fontWeight: 'bold'
  				}
  			],
  			typ3: [
  				'1rem',
  				{
  					lineHeight: '150%',
  					letterSpacing: '0px',
  					fontWeight: 'bold'
  				}
  			],
  			typ4: [
  				'.875rem',
  				{
  					lineHeight: '150%',
  					letterSpacing: '0px',
  					fontWeight: 'normal'
  				}
  			],
  			typ4b: [
  				'.875rem',
  				{
  					lineHeight: '150%',
  					letterSpacing: '0px',
  					fontWeight: 'bold'
  				}
  			],
  			typ5: [
  				'.75rem',
  				{
  					lineHeight: '150%',
  					letterSpacing: '0px',
  					fontWeight: 'normal'
  				}
  			],
  			typ5b: [
  				'.75rem',
  				{
  					lineHeight: '150%',
  					letterSpacing: '0px',
  					fontWeight: 'bold'
  				}
  			]
  		},
  		screens: {
  			'tablet': '768px',
  			'desktop': '1140px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
