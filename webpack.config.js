module.exports = {
    entry: "./src/app/app.tsx",

    output: {
        filename: "bundle.js",
        path: __dirname + "/src",
    },

    resolve: {
        extensions: [".tsx", ".js"]
    },

    module: {
        loaders: [
          {
              test: /\.tsx?$/,
              exclude: /node_modules/,
              loaders: ["ts-loader"]
          }
        ]
    }
};