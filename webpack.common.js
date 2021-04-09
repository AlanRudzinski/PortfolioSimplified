module.exports = {
    entry: {
        index: "./src/app.js",
        contact: "./src/contact.js",
        about: "./src/about.js",
        projects: "./src/projects.js"
    },

    module: {
        rules: [
            {
                test: /\.html$/i, 
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "images"
                    }
                }
            }
        ]
    }
}