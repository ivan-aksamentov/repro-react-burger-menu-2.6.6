module.exports = {
  compact: false,
  presets: [
    ['@babel/env', { modules: false }],
    ['@babel/preset-react', { useBuiltIns: true }],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    'react-hot-loader/babel',
  ],
}
