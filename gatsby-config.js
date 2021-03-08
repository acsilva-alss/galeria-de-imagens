module.exports = {
    plugins: [
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