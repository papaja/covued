module.exports = {
    chainWebpack: (config) => {
        config.module
            .rule("images")
            .use("url-loader")
            .loader("url-loader")
            .tap((options) => {
                options.fallback.options.name = "assets/[name].[ext]"
                return options
            })
    }
}