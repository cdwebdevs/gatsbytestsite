/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `MyNewSite`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
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
            {
              resolve: 'gatsby-theme-portfolio-minimal',
              options: {
                  // siteUrl: "https://example.com", // Used for sitemap generation
                  contentDirectory: './content',
                  blogSettings: {
                      path: '/blog', // Defines the slug for the blog listing page
                      usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
                  },
              },
          },
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