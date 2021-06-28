module.exports = {
  client: {
    includes: [
      "./src/**/*.tsx",
      "./src/**/*.ts",
      "./node_modules/gatsby-transformer-sharp/src/fragments.js",
    ],
    service: {
      name: "gatsby-graphql",
      url: "http://localhost:8000/__graphql",
    },
    tagName: "graphql",
  },
}
