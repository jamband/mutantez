module.exports = {
  mode: 'jit',
  theme: {
    container: {
      padding: '1rem'
    },
    screens: {
      md: '720px'
    },
    fontFamily: {
      sans: ['"Source Sans Pro"', '"Yu Gothic"', 'YuGothic', 'sans-serif']
    },
    fontSize: {
      xs: ['13px', '1.5'],
      sm: ['15px', '20px'],
      base: ['17px', '1.65'],
      '3xl': '1.65rem',
      '4xl': '2rem'
    },
    extend: {
      colors: {
        gray: {
          100: '#d8dee9',
          700: '#2e3440',
          800: '#2c313d',
          900: '#21252e'
        }
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'content/**/*.md',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
