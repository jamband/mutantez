module.exports = {
  theme: {
    container: {
      padding: '1rem'
    },
    screens: {
      md: '720px'
    },
    fontFamily: {
      sans: ['"Source Sans Pro"', '"游ゴシック体"', '"Yu Gothic"', '"yugothic"', 'sans-serif']
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '1.65'],
      '3xl': '1.65rem',
      '4xl': '2rem'
    },
    extend: {
      colors: {
        gray: {
          100: '#f6f6f9',
          200: '#eeefef',
          700: '#5e5e5f',
          800: '#374851'
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