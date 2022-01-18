# Styleguide link

<<<<<<< HEAD
[Zuri Master Guide](https://www.figma.com/file/srHjZ2Ztg7yOS7XDJMMX4m/Zuri-Chat-Master-Board?node-id=19%3A19322)
=======
[Zuri Master Guide](https://www.figma.com/file/srHjZ2Ztg7yOS7XDJMMX4m/Zuri-Chat-Master-Board?node-id=19%3A19322) - For typography, color palette, iconography, imagery, buttons, forms and spacing.

[FE Quality Control Docs](https://docs.google.com/document/d/1Sbq-ZC4O5477cx5cRuZKReVsdglABg7c585NAoZTHIU/edit) - For guidelines on how to contributeto the frontend.
>>>>>>> 8d5b4a8ada20e6c31e29d8beca79334d0c343f78

# Styling in Zuri Main

To avoid style clashes use css modules when styling in Zuri Main
for example

```ts
// IS NOT VALID UNLESS REFERENCING A STYLE MADE AVAILABLE IN THE GLOBAL STYLESHEET
const TestComponent = () => {
  return <div style={`testComponentDiv`}></div>
}
export default TestComponent
```

```ts
// IS VALID
<<<<<<< HEAD
import style from './styles.module.css'
=======
import style from "./styles.module.css"
>>>>>>> 8d5b4a8ada20e6c31e29d8beca79334d0c343f78

const TestComponent = () => {
  return <div style={`${style.testComponentDiv}`}></div>
}
export default TestComponent
```

# Styling for plugins in Zuri Main

In the `webpack.config.js` modify to

```js
<<<<<<< HEAD
const { mergeWithRules } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react')

const mergeRules = {
  plugins: 'replace',
  devServer: {
    static: {
      directory: 'replace'
=======
const { mergeWithRules } = require("webpack-merge")
const singleSpaDefaults = require("webpack-config-single-spa-react")

const mergeRules = {
  plugins: "replace",
  devServer: {
    static: {
      directory: "replace"
>>>>>>> 8d5b4a8ada20e6c31e29d8beca79334d0c343f78
    }
  },
  module: {
    rules: {
<<<<<<< HEAD
      test: 'match',
      include: 'replace',
      exclude: 'replace',
      use: 'replace'
=======
      test: "match",
      include: "replace",
      exclude: "replace",
      use: "replace"
>>>>>>> 8d5b4a8ada20e6c31e29d8beca79334d0c343f78
    }
  }
}

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
<<<<<<< HEAD
    orgName: 'zuri',
    projectName: '{REPLACE WITH APPLICATION NAME}',
=======
    orgName: "zuri",
    projectName: "{REPLACE WITH APPLICATION NAME}",
>>>>>>> 8d5b4a8ada20e6c31e29d8beca79334d0c343f78
    webpackConfigEnv,
    argv
  })

  return mergeWithRules(mergeRules)(defaultConfig, {
    //   OTHER WEBPACK RULES
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
<<<<<<< HEAD
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[local]--[hash:base64:5]__[name]'
=======
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: "[local]--[hash:base64:5]__[name]"
>>>>>>> 8d5b4a8ada20e6c31e29d8beca79334d0c343f78
                }
              }
            }
          ]
        }
      ]
    }
  })
}
```
