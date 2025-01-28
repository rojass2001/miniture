/**  @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}",];
export const theme = {
  extend: {
    screens: {
      'xs':{min:'0px',max:'320px'},
      'sm':{ min:'321px',max:'650px'},
      'md':{ min:'651px',max:'1050px'},
      'lg':{ min:'1051px',max:'1300px'},
      'xl':{ min:'1301px',max:'1600px'},
  },
      
    },
    
};
export const plugins = [];
