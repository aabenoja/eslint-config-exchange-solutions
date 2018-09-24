module.exports = {
  extends: [
    'eslint-config-airbnb/base',
    './core'
  ].map(require.resolve)
};
