
// steps to use redux in react app 
// 1. create store 
// 2. provide store to react app (in index.js)
// 3. create slices for compoments 
// 4. invoke slices into components 

import { createStoreHook } from "react-redux";
// import { createStore } from "redux";

// useful links :
// https://redux.js.org/introduction/getting-started
// https://react-redux.js.org/introduction/getting-started
// https://redux-toolkit.js.org/introduction/getting-started


const store = createStoreHook();

// const store = createStore();


export default store;