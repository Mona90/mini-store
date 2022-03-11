import React from 'react'
import { gql, useQuery } from '@apollo/client';


// const EXCHANGE_RATES = gql`
//   query GetExchangeRates {
//     rates(currency: "USD") {
//       currency
//       rate
//     }
//   }
// `;

const ADD_TOCART = gql`

query AddToCart {
cart(id: "ck5r8d5b500003f5o2aif0v2b") {
  id
  isEmpty
  totalItems
  items {
    id
    name
  }
}
}
}
`;
function ExchangeRates() {
    const { loading, error, data } = useQuery(ADD_TOCART);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.items.map(({ id, name }) => (
      <div key={id}>
        <p>
          {name}: {name}
        </p>
      </div>
    ));
  }


export default ExchangeRates