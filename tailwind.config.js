import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                white: "#fff",
                gray: {
                  "100": "#2b283a",
                  "200": "#0b2434",
                },
                whitesmoke: "#f5f5f5",
                mediumblue: "#5035ff",
                lightgreen: "#5ae391",
                slategray: "#4a4f74",
              },
              spacing: {},
              fontFamily: {
                karla: "Karla",
                inter: "Inter",
              },
              borderRadius: {
                "9xs-8": "3.8px",
              },
            },
            fontSize: {
              "xl-6": "20.6px",
              base: "16px",
              inherit: "inherit",
            },
            screens: {
              mq450: {
                raw: "screen and (max-width: 450px)",
              },
        },
    },
    corePlugins: {
        preflight: false,
      },

    plugins: [forms],
};
