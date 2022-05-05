const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
    addWebpackAlias({
        "@util": path.resolve(__dirname, "./src/util"),
        "@constant": path.resolve(__dirname, "./src/constant"),
        "@component": path.resolve(__dirname, "./src/component"),
    })
);
