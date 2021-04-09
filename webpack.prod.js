const path = require("path");
const common = require("./webpack.common")
const { merge } = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const htmlPageNames = ['about', 'contact', 'projects']

const multipleHtmlPlugins = htmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
        filename: `${name}/index.html`,
        template: `./public/${name}.html`,
        chunks: [`${name}`],
        hash: true,
        minify: {
            collapseWhitespace: true,
            removeComments: true
        }
    })
})


module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                filename: `index.html`,
                template: `./public/index.html`,
                chunks: [`index`],
                hash: true,
                minify: {
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
        ].concat(multipleHtmlPlugins)
    },
    plugins: [
        new MiniCssExtractPlugin([{filename: "[name].[hash].css"}]),
        new CleanWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
        ]
    }
})