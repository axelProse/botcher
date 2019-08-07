// module.exports = {
//   presets: ['@babel/preset-env', '@babel/preset-react'],
// };

// module.exports = {
//   "presets": [
//     [
//       "@babel/preset-env",
//       {
//         "targets": {
//           "node": "10"
//         }
//       }
//     ],
//     "@babel/preset-react"
//   ]
// }

module.exports = {
  "plugins": ["@babel/plugin-transform-runtime"],
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "70"
        },
        "exclude": ["transform-regenerator"]
      }
    ],
    "@babel/preset-react"
  ]
}