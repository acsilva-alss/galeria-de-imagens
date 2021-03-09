module.exports = {
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: __dirname + '/src/assets',
                name: 'assets'
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp'
    ]
}