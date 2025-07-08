// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      // Disable formatting rules that might interfere with manual formatting
      'prettier/prettier': 'off',
      '@stylistic/no-trailing-spaces': 'off',
      '@stylistic/eol-last': 'off',
      '@stylistic/comma-dangle': 'off',
      '@stylistic/semi': 'off',
      '@stylistic/quotes': 'off'
    }
  }
)
