import { gql } from '@apollo/client';



export const getTest = gql`
    query getCurr {
        category {
            name
            products {
              id
              name
              inStock
              gallery
              description
              category
              attributes {
                name
                items {
                  displayValue
                  value
                  id
                }
              }
              prices {
                currency {
                  label
                  symbol
                }
                amount
              }
              brand
            }
          }
    }
  `;

