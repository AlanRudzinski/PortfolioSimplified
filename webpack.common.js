module.exports = {
    entry: {
        index: "./src/app.js",
        contact: "./src/contact.js",
        about: "./src/about.js",
        projects: "./src/projects.js",
        projectDescription: "./src/projectDescription.js"
    },

    module: {
        rules: [
            {
                test: /\.html$/i, 
                use: {
                    loader: "html-loader",
                }
            },
        ]
    }
}