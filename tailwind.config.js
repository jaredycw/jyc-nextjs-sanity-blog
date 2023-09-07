/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1250px',
    },
    container: {
      padding: '1.5rem',
    },
  },
  plugins: [],
  layers: {
    // Create a new layer and exclude specific styles
    // In this example, we'll disable the background and padding utility classes.
    excluded: ['width'],
  },
}

