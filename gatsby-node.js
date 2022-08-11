const path = require("path");
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve("./src/pages/ProductPage.js");
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      query {
        allContentfulProduct {
          nodes {
            id
            slug
            stock
            isAvaliable
            name
            capacity
            price
            description {
              description
            }
            image {
              file {
                url
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog post pages.
    result.data.allContentfulProduct.nodes.forEach((node) => {
      const path = node.capacity
        ? node.slug + "-" + node.capacity + "ml"
        : node.slug;

      createPage({
        // Path for this page — required
        path: path,
        component: productTemplate,
        context: {
          name: node.name,
          price: node.price,
          capacity: node.capacity || 0,
          stock: node.stock,
          isAvaliable: node.isAvaliable,
          description: node.description.description,
          imageURL: node.image[0].file.url,
        },
      });
    });
  });
};
