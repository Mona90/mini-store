import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {  ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import product from './Service/reducer';
import { swiftClient } from './Appollo';


// client
// .query({
//   query: gql`
//     query GetRates {
//       rates(currency: "USD") {
//         currency
//       }
//     }
//   `
// })
// .then(result => console.log(result));

// const EXCHANGE_RATES = gql`
//   query GetExchangeRates {
//     rates(currency: "USD") {
//       currency
//       rate
//     }
//   }
// `;
const store = createStore(product)
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <ApolloProvider client={swiftClient}>
          <Provider store={store}>
          <App />
          </Provider>
        </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


