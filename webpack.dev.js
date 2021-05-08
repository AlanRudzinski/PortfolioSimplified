const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin")


const htmlPageNames = ['index', 'about', 'contact', 'projects']

const multipleHtmlPlugins = htmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
        filename: `${name}/index.html`,
        template: `./public/${name}.html`,
        favicon: './public/static/favicon.png',
        chunks: [`${name}`],

    })
})

const projectHtmlPageNames = ['promyk', 'craftstore']

const projectMultipleHtmlPlugins = projectHtmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
        filename: `projects/${name}/index.html`,
        template: `./public/projects/${name}/index.html`,
        favicon: './public/static/favicon.png',
        chunks: [`projectDescription`],


    })
})

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        // publicPath: path.resolve(__dirname, "dist"),

    },
    plugins: [...multipleHtmlPlugins, ...projectMultipleHtmlPlugins],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
        ]
    },
    devServer: {
        contentBase: './dist'
    }
});