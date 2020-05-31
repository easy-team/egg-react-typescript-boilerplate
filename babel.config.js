module.exports = {
  "env": {
    "node": {
      "presets": [
        "@babel/preset-react",
        [
          "@babel/preset-env",
          {
            "modules": false,
            "targets": {
              "node": "current"
            }
          }
        ]
      ],
      "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-object-rest-spread"
      ]
    },
    "web": {
      "presets": [
        "@babel/preset-react",
        [
          "@babel/preset-env",
          {
            "modules": false,
            "targets": {
              "browsers": [
                "last 2 versions",
                "safari >= 8"
              ]
            }
          }
        ]
      ],
      "plugins": [
        "react-hot-loader/babel",
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-object-rest-spread",
        [
          "import",
          {
            "libraryName": "antd",
            "libraryDirectory": "lib",
            "style": true
          }
        ]
      ]
    }
  },
  "comments": false
}
