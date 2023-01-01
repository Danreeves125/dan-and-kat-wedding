const plugin = require("tailwindcss/plugin")

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            body: ["Roboto", "sans-serif"],
            title: ["Roboto Condensed", "sans-serif"],
        },
        container: {
            center: true,
        },
        extend: {
            screens: {
                xs: "480px",
                small: "640px",
                small_ls: "750px",
                medium: "1024px",
                large: "1200px",
                safari: {
                    raw: "not all and (min-resolution: 0.001dpcm)",
                },
                mouse: {
                    raw: "(hover: hover)",
                },
            },
            colors: {
                theme: {
                    purple: {
                        DEFAULT: "hsl(245, 55%, 59%)",
                        alt: "hsl(293, 46%, 51%)",
                    },
                    pink: {
                        DEFAULT: "hsl(323, 71%, 53%)",
                        alt: "hsl(339, 92%, 56%)",
                    },
                    blue: {
                        DEFAULT: "hsl(211, 100%, 41%)",
                    },
                    grey: {
                        DEFAULT: "hsl(0, 7%, 92%)",
                        medium: "hsl(0, 0%, 87%)",
                        dark: "hsl(0, 0%, 44%)",
                        darkest: "hsl(0, 0%, 20%)",
                    },
                },
            },
        },
    },
    plugins: [],
}
