module.exports = {
  root: true,
  extends: ["@react-native-community", "plugin:react-native-a11y/ios"],
  rules: {
    curly: "off",
    quotes: "off",
    "react/react-in-jsx-scope": "off",
    "react-native-a11y/has-accessibility-hint": "off",
  },
};
