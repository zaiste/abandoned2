export const AbandonedCarts = /* GraphQL */`
  query AbandonedCarts {
    checkouts(first: 10) {
    edges {
      node {
        id
        lines {
          variant {
            product {
              name
              thumbnail {
                url
              }
            }
          }
        }
      }
    }
  }
  }
`;
