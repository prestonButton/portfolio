/** @type {import('tailwindcss').Config} */
module.exports = {
  content :
          [
            "./app/**/*.{js,ts,jsx,tsx,mdx}",
            "./components/**/*.{js,ts,jsx,tsx,mdx}",
          ],
  theme : {
    extend : {
      colors : {
        background : "hsl(var(--background))",
        foreground : "hsl(var(--foreground))",
        btn : {
          background : "hsl(var(--btn-background))",
          "background-hover" : "hsl(var(--btn-background-hover))",
        },
      },
      gridTemplateRows : {
        'even-row' : 'repeat(6, 1fr)',
      },
      gridTemplateColumns : {
        'grid-cols-2' : 'repeat(2, 1fr)',
        'grid-cols-3' : 'repeat(3, 1fr)',
        'grid-cols-4' : 'repeat(4, 1fr)',
        // Add more grid sizes as needed
      },
    },
  },
  plugins : [],
};
