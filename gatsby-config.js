/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `MyNewSite`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-google-gtag",
            "gatsby-plugin-image",
            "gatsby-plugin-sharp",
            {
              resolve: "gatsby-source-filesystem",
              options: {
                name: `blog`,
                path: `${__dirname}/blog/`,
              }
            },
            "gatsby-plugin-mdx",
            "gatsby-transformer-sharp",
            "gatsby-plugin-sass",
            "gatsby-theme-portfolio-minimal",
            {
              resolve: `gatsby-plugin-modal-routing`,
              options: {
                // A selector to set react-modal's app root to, default is `#___gatsby`
                // See http://reactcommunity.org/react-modal/accessibility/#app-element
                appElement: '#___gatsby',
        
                // Object of props that will be passed to the react-modal container
                // See http://reactcommunity.org/react-modal/#usage
                modalProps: {
                  closeTimeoutMS: 500
                },
              }
            },

            {
              resolve: "gatsby-plugin-react-svg",
              options: {
                rule: {
                  include: /assets/ // See below to configure properly
                }
              }
            }          
          ]
};