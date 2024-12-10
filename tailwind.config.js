/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            colors: {
                'primary':"rgb(100,0,0)"
            },
            fontFamily : {
                'display':["Cedarville Cursive","cursive"], // will be downlaoded if not present
                'Inter': [ "Edu AU VIC WA NT Pre", "cursive" ],
                'body': ["Robot","Sans-serif"]
            }
        },
    },
    plugins: [],
}

