module.exports = {
  extends: ['algolia', 'algolia/jest'],
  rules: {
    'import/no-commonjs': 'off',
    'import/extensions': ['error', 'ignorePackages'],
  },
};
