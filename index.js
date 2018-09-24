module.exports = {
  extends: [
    'eslint-config-airbnb',
    './base',
    './react'
  ].map(require.resolve)
};
