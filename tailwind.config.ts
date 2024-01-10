import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Travelers-rounded', 'sans-serif'],
        body: ['Founders', 'sans-serif'],
      },
      height: {
        '320': '320px',
      },
      backgroundImage: {
        'farm-background' : "url('/farm-background.jpeg')",        
      },
      opacity: {
        '67': '.3',
      }
    },
  },
  plugins: [],
}
export default config
