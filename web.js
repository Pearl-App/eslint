// http://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: ['./index.js'],
  plugins: ['xss'],
  rules: {
    'xss/no-location-href-assign': [
      'error',
      {
        escapeFunc: 'encodeURIComponent',
      },
    ],
    'xss/no-mixed-html': 'error',
  },
}
