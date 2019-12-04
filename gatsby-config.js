module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `articles`,
                path: `${__dirname}/src/articles`
            }
        },
        `gatsby-transformer-sharp`,
        {
            resolve: 'gatsby-source-apiserver',
            options: {
                url: "https://commonlyjs.com/commonly/packages/reflect/members.json",
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
                name: "members",
                localSave: true,
                skipCreateNode: true,
                path: `${__dirname}/src/data/api/reflect/`,
            }
        },
        {
            resolve: 'gatsby-source-apiserver',
            options: {
                url: "https://commonlyjs.com/commonly/packages/reflect/package.json",
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
                name: "package",
                localSave: true,
                skipCreateNode: true,
                path: `${__dirname}/src/data/api/reflect/`,
            }
        },

        {
            resolve: 'gatsby-source-apiserver',
            options: {
                url: "https://commonlyjs.com/commonly/packages/type/members.json",
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
                name: "members",
                localSave: true,
                skipCreateNode: true,
                path: `${__dirname}/src/data/api/type/`,
            }
        },
        {
            resolve: 'gatsby-source-apiserver',
            options: {
                url: "https://commonlyjs.com/commonly/packages/type/package.json",
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
                name: "package",
                localSave: true,
                skipCreateNode: true,
                path: `${__dirname}/src/data/api/type/`,
            }
        },

        {
            resolve: 'gatsby-source-apiserver',
            options: {
                url: "https://commonlyjs.com/commonly/packages/math/members.json",
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
                name: "members",
                localSave: true,
                skipCreateNode: true,
                path: `${__dirname}/src/data/api/math/`,
            }
        },
        {
            resolve: 'gatsby-source-apiserver',
            options: {
                url: "https://commonlyjs.com/commonly/packages/math/package.json",
                method: "get",
                headers: {
                    "Content-Type": "application/json"
                },
                name: "package",
                localSave: true,
                skipCreateNode: true,
                path: `${__dirname}/src/data/api/math/`,
            }
        },


        // {
        //     resolve: `gatsby-plugin-json-output`,
        //     options: {
        //         siteUrl: `https://commonlyjs.com/commonly/reflect/members.json`,
        //         graphQLQuery: `
        //             {
        //               allMarkdownRemark(limit: 1000) {
        //                 edges {
        //                   node {
        //                     excerpt
        //                     html
        //                     fields { path }
        //                     frontmatter {
        //                       title
        //                       created
        //                       updated
        //                     }
        //                   }
        //                 }
        //               }
        //             }
        //           `
        //     }
        // }
        // {
        //     resolve: "gatsby-source-graphql",
        //     options: {
        //         typeName: "RMAPI",
        //         fieldName: "rickAndMorty",
        //         url: "https://rickandmortyapi-gql.now.sh/",
        //     },
        // },
        // {
        //     resolve: "gatsby-source-graphql",
        //     options: {
        //         typeName: "REFLECTPACKAGEAPI",
        //         fieldName: "reflectMembers",
        //         url: "https://commonlyjs.com/commonly/reflect/package.json",
        //     },
        // },
    ]
}
