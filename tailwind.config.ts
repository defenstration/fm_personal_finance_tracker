import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'beige': {
          100: "hsl(30, 36%, 96%)",
          500: "hsl(23, 6%, 57%)",
        },
        "grey": {
          100: "hsl(0, 0%, 95%)",
          300: "hsl(0, 0%, 70%)",
          500: "hsl(0, 0%, 41%)",
          900: "hsl(252, 7%, 13%)",
          "navy": "hsl(214, 11%, 63%)"
        },
        "green" : "hsl(177, 52%, 32%)",
        "yellow": "hsl(28, 73%, 81%)",
        "navy": "hsl(248, 8%, 41%)",
        "red": "hsl(7, 58%, 50%)",
        "purple": {
          1: "hsl(288, 29%, 62%)",
          2: "hsl(259, 30%, 56%)"
        },
        "cyan": "hsl(190, 52%, 68%)",
        "brown": "hsl(21, 30%, 44%)",
        "turquoise": "hsl(180, 16%, 42%)",
        "magenta": "hsl(332, 30%, 44%)",
        "blue": "hsl(205, 48%, 47%)",
        "army": "hsl(83, 20%, 47%)",
        "gold": "hsl(47, 50%, 59%)",
        "orange": "hsl(18, 47%, 52%)",
        "white": "hsl(0, 0%, 100%)"
      },
      fontSize: {
        1: ["2rem", {
          lineHeight: "120%",
          letterSpacing: "0px",
          fontWeight: "bold"
        }],
        2: ["1.25rem", {
          lineHeight: "120%",
          letterSpacing: "0px",
          fontWeight: "bold"
        }],
        3: ["1rem", {
          lineHeight: "150%",
          letterSpacing: "0px",
          fontWeight: "bold"
        }],
        4: [".875rem", {
          lineHeight: "150%",
          letterSpacing: "0px",
          fontWeight: "regular"
        }],
        "4b": [".875rem", {
          lineHeight: "150%",
          letterSpacing: "0px",
          fontWeight: "bold"
        }],
        5: [".75rem", {
          lineHeight: "150%",
          letterSpacing: "0px",
          fontWeight: "regular"
        }],
        "5b": [".75rem", {
          lineHeight: "150%",
          letterSpacing: "0px",
          fontWeight: "bold"
        }]
      },
      screens: {
        "tablet": "768px",
        "desktop": "1140px"
      }
    },
  },
  plugins: [],
} satisfies Config;
