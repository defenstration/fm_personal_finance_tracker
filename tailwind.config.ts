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
          500: "hsl(23, 6%, 57%"
        },
        "grey": {
          100: "hsl(0, 0%, 95%)",
          300: "hsl(0, 0%, 70%)",
          500: "hsl(0, 0%, 41%)",
          900: "hsl(252, 7%, 13%)",
        }


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
        }],

      }
    },
  },
  plugins: [],
} satisfies Config;
