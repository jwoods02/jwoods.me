module.exports = {
  purge: [
    './src/**/*.html',
  ],
  theme: {
    fontFamily: {
      mono: ['"Fira Code"','Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      extend: {}
  },
  variants: {
    borderWidth: ['hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
};
