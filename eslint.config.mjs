import antfu from '@antfu/eslint-config'

// https://github.com/antfu/eslint-config
export default antfu({
  // stylistic: {
  //   indent: 2,
  //   quotes: 'single',
  // },
  typescript: true,
  // ignores: [
  //   '**/fixtures',
  //   // ...globs
  // ],
}, {
  // files: ['**/*.ts'],
  rules: {
    'no-console': 'off',
  },
})
