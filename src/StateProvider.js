// // data layer preparation

// import React,{createContext,useContext,useReducer} from "react";

// //preparing the data layer
// export const StateContext = createContext();

// //reducer is clever and understand state
// export const StateProvider =({reducer,initalState,children
// })=>(
//     <StateContext.Provider value={useReducer(reducer,initalState)}>
//         {children}
//     </StateContext.Provider>
// );

// //hook which allows us to pull information form the dta layer
// export const useStateValue =() =>useContext(StateContext); 