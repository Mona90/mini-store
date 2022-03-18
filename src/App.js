import { useState, createContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Category from './pages/Category';
import { Route, Routes } from 'react-router-dom';
import PDP from './pages/PDP/PDP';
import Cart from './pages/cart/Cart';
import { useQuery } from '@apollo/client';
import { getTest } from './query';

export const productsData = createContext([]);
function App() {
  const [data, setData] = useState([])
  const { loading, error, querydata } = useQuery(getTest);
  console.log('testttt', querydata)
  return (
    <productsData.Provider value={{data, setData}}>
        <Header/>
        <Routes>
            <Route index  path="/"  element={<Category/>}/>
            <Route path="/PDP/:id" element={<PDP/>}/>
            <Route path="cart" element={<Cart/>}/>
        </Routes>
    </productsData.Provider>

  );
}

export default App;


// import { useState, createContext, Component } from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './Components/Header';
// import Category from './pages/Category';
// import { Route, Routes } from 'react-router-dom';
// import PDP from './pages/PDP/PDP';
// import Cart from './pages/cart/Cart';
// import { gql } from '@apollo/client';
// import { swiftClient } from './Appollo';
// export const productsData = createContext([]);



// class App extends Component {
//   constructor(props) {
//      super(props);
//     this.state={
//       data:''
//     }
//   }
// //   const [data, setData] = useState([])
// //   const getItemsByCategory = gql`
// // query getItemsByCategory($title: String!) {
// //   category(input: { title: $title }) {
// //     products {
// //       name
// //       gallery
// //       inStock
// //       prices {
// //         currency
// //         amount
// //       }
// //       category
// //       description
// //       attributes {
// //         id
// //         name
// //         type
// //         items {
// //           displayValue
// //           value
// //           id
// //         }
// //       }
// //     }
// //   }
// // }
// // `;
//   // const { loading, error, grqphData } = useQuery(getItemsByCategory);
//   // console.log(grqphData);
//   async fetchItems() {
//     let temp;
//     temp = await swiftClient.query({
//       query: gql`
//         query {
//           category(input: { title: "${this.props.category}" }) {
//             name
//             products {
//               id
//               name
//               inStock
//               gallery
//               description
//               category
//               attributes {
//                 name
//                 items {
//                   displayValue
//                   value
//                   id
//                 }
//               }
//               prices {
//                 currency {
//                   label
//                   symbol
//                 }
//                 amount
//               }
//               brand
//             }
//           }
//         }
//       `,
//     });

//     // this.setState({ theSelectedList: temp.data.category.products });
//     console.log("temp test",  temp.data)

//   }

//   componentDidMount() {
//     this.fetchItems();
//   }
//   render (){
//   return (
//     <productsData.Provider value={this.state.data}>
//         <Header/>
//         <Routes>
//             <Route index  path="/"  element={<Category/>}/>
//             <Route path="/PDP/:id" element={<PDP/>}/>
//             <Route path="cart" element={<Cart/>}/>
//         </Routes>
//     </productsData.Provider>

//   )};
// }

// export default App;
