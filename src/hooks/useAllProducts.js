import { useStaticQuery, graphql } from "gatsby";

//returns a table of objects
export const useAllProducts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProduct {
        nodes {
          name
          price
          capacity
          slug
          isAvaliable
          image {
            file {
              url
            }
          }
        }
      }
    }
  `);
  return data.allContentfulProduct.nodes;
};
