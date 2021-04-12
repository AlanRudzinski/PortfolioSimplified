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
        favicon: './public/static/favicon.png',
        chunks: [`${name}`],
        hash: true,
        minify: {
            collapseWhitespace: true,
            removeComments: true
        }
    })
})

const projectHtmlPageNames = ['promyk']

const projectMultipleHtmlPlugins = projectHtmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
        filename: `projects/${name}/index.html`,
        template: `./public/projects/${name}/index.html`,
        favicon: './public/static/favicon.png',
        chunks: [`projectDescription`],
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
        path: path.resolve(__dirname, "dist"),
        // publicPath: path.resolve(__dirname, "dist"),

    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                filename: `index.html`,
                template: `./public/index.html`,
                favicon: './public/static/favicon.png',
                chunks: [`index`],
                hash: true,
                minify: {
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            ...multipleHtmlPlugins,
            ...projectMultipleHtmlPlugins
        ]
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