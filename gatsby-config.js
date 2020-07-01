module.exports = {

  siteMetadata: {
    title: 'Rebellious-Gnome Blog!',
    author: 'Mathew Wrigley'
  },
  /* Your site config here */
  plugins: [
      'gatsby-plugin-sass',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'src',
          path: `${__dirname}/src/`
        }
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      {
        resolve: 'gatsby-transformer-remark',
        options: {
            plugins: [
              'gatsby-remark-relative-images',
              {
                resolve: 'gatsby-remark-images',
                options: {
                    maxWidth: 750,
                    linkImagesToOriginal: false
                }
              }
          ]
        }
      }
    ]
}
