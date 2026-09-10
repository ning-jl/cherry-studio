const { defineConfig } = require('oxlint')

const localRules = [
  'renderer-boundaries',
  'page-boundaries',
  'utility-process-boundaries',
  'no-export-star',
  'index-no-impl',
  'no-index-tsx',
  'barrel-named-only',
  'barrel-closed',
  'barrel-no-nesting',
  'no-bucket-root-barrel',
  'path-case',
  'no-as-filepath',
  'no-direct-quit',
  'no-template-in-t',
  'prefer-zod-namespace',
  'no-prop-types'
]

const reactMigrationRules = {
  'react/button-has-type': 'warn',
  'react/forward-ref-uses-ref': 'warn',
  'react/iframe-missing-sandbox': 'warn',
  'react/jsx-key': ['error', { checkKeyMustBeforeSpread: true, warnOnDuplicates: true, checkFragmentShorthand: true }],
  'react/jsx-no-comment-textnodes': 'warn',
  'react/jsx-no-script-url': 'warn',
  'react/jsx-no-target-blank': 'warn',
  'react/no-clone-element': 'warn',
  'react/no-danger-with-children': 'error',
  'react/no-did-mount-set-state': 'warn',
  'react/no-did-update-set-state': 'warn',
  'react/no-direct-mutation-state': 'error',
  'react/no-find-dom-node': 'error',
  'react/no-namespace': 'error',
  'react/no-redundant-should-component-update': 'error',
  'react/no-render-return-value': 'error',
  'react/no-string-refs': 'error',
  'react/no-unsafe': ['error', { checkAliases: true }],
  'react/no-will-update-set-state': 'warn',
  'react/void-dom-elements-no-children': 'error',
  'cherry/no-prop-types': 'error',
  '@eslint-react/dom-no-flush-sync': 'error',
  '@eslint-react/dom-no-hydrate': 'error',
  '@eslint-react/dom-no-render': 'error',
  '@eslint-react/dom-no-use-form-state': 'error',
  '@eslint-react/naming-convention-context-name': 'warn',
  '@eslint-react/no-access-state-in-setstate': 'error',
  '@eslint-react/no-children-count': 'warn',
  '@eslint-react/no-children-for-each': 'warn',
  '@eslint-react/no-children-map': 'warn',
  '@eslint-react/no-children-only': 'warn',
  '@eslint-react/no-context-provider': 'warn',
  '@eslint-react/no-create-ref': 'error',
  'cherry/react-no-default-props': 'error',
  '@eslint-react/no-forward-ref': 'warn',
  'cherry/react-no-implicit-key': 'warn',
  '@eslint-react/no-misused-capture-owner-stack': 'error',
  '@eslint-react/no-nested-lazy-component-declarations': 'warn',
  '@eslint-react/no-unused-class-component-members': 'warn',
  'cherry/react-no-unused-state': 'warn',
  'cherry/react-no-use-context': 'warn',
  '@eslint-react/web-api-no-leaked-interval': 'warn',
  '@eslint-react/web-api-no-leaked-resize-observer': 'warn'
}

module.exports = defineConfig({
  categories: {},
  jsPlugins: [
    { name: 'cherry', specifier: '../cherryPlugin.mjs' },
    { name: '@eslint-react', specifier: '../eslint-react-compat/index.mjs' }
  ],
  plugins: ['react'],
  rules: {
    ...Object.fromEntries(localRules.map((rule) => [`cherry/${rule}`, 'error'])),
    ...reactMigrationRules
  },
  overrides: [
    {
      files: ['positive/src/shared/data/cache/cacheSchemas.ts', 'negative/src/shared/data/cache/cacheSchemas.ts'],
      rules: { 'cherry/valid-schema-key': 'error' }
    },
    {
      // Locks the `react/rules-of-hooks` migration contract (matches oxlint.config.ts). Scoped to the
      // single ConditionalHook fixture so the react plugin's other defaults don't touch the rest.
      files: ['negative/src/renderer/components/ConditionalHook.tsx'],
      plugins: ['react'],
      rules: { 'react/rules-of-hooks': 'error' }
    },
    {
      files: ['negative/src/renderer/components/DynamicReact.ts'],
      rules: { '@eslint-react/no-clone-element': 'error' }
    }
  ]
})
