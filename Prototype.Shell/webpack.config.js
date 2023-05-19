const path = require('path');
const fs = require("fs");

module.exports = [
    {
        name: "get-react",
        entry: () => fs.readdirSync("../BlueTeam.FE/wwwroot/dist/")
            .filter(f => f.endsWith(".js"))
            .map(f => `../BlueTeam.FE/wwwroot/dist/${f}`),
        devtool: "source-map",
        mode: "development",
        output: {
            filename: "app.js",
            path: path.resolve(__dirname, "./wwwroot/dist/bt_fe/")
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    enforce: "pre",
                    use: ["source-map-loader"]
                }
            ]
        }
    },
    {
        name: "get-ls",
        entry: () => fs.readdirSync("../GreenTeam.FE/wwwroot/dist/")
            .filter(f => f.endsWith(".js"))
            .map(f => `../GreenTeam.FE/wwwroot/dist/${f}`),
        devtool: "source-map",
        mode: "development",
        output: {
            filename: "app.js",
            path: path.resolve(__dirname, "./wwwroot/dist/gt_fe/")
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    enforce: "pre",
                    use: ["source-map-loader"]
                }
            ]
        }
    },
    {
        name: "get-rs",
        entry: () => fs.readdirSync("../RedTeam.FE/wwwroot/dist/")
            .filter(f => f.endsWith(".js"))
            .map(f => `../RedTeam.FE/wwwroot/dist/${f}`),
        devtool: "source-map",
        mode: "development",
        output: {
            filename: "app.js",
            path: path.resolve(__dirname, "./wwwroot/dist/rt_fe/")
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    enforce: "pre",
                    use: ["source-map-loader"]
                }
            ]
        }
    }
]