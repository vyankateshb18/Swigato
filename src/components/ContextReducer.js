// import React, { createContext, useReducer, useContext } from 'react'

// const CartStateContext = createContext()
// const CartDispatchContext = createContext()

// const reducer = (state,action)=>{
//    switch(action.type){
//       case "ADD":
//         return [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}]
//         case "REMOVE":
//             let newArr = [...state]
//             newArr.splice(action.index,1)
//             return newArr
//             case "DROP":
//                 let empArray = []
//                 return empArray
//       default :
//         console.log("Error in Reducer")
//    }
// }

// export const CartProvider = ({children})=>{
//     const[state,dispatch] = useReducer(reducer,[])
//     return (
// <CartDispatchContext.Provider value={dispatch}>
//     <CartStateContext.Provider value={state}>
//         {children}
//     </CartStateContext.Provider>
// </CartDispatchContext.Provider>
//     )
// }

// export const useCart = ()=> useContext(CartStateContext);
// export const useDispatchCart = ()=> useContext(CartDispatchContext)

import React, { createContext, useReducer, useContext } from 'react';

// Create separate contexts for state and dispatch
const CartStateContext = createContext();
const CartDispatchContext = createContext();

// Reducer function to handle state updates based on actions
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          size: action.size,
          price: action.price,
          img: action.img
        }
      ];
    case "REMOVE":
      // Create a new array without the item at the specified index
      return state.filter((_, index) => index !== action.index);
    case "DROP":
      // Reset state to an empty array
      return [];
    default:
      console.error("Error in Reducer");
      return state;
  }
};

// CartProvider component to manage cart state and provide it via context
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

// Custom hooks to access cart state and dispatch function
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
