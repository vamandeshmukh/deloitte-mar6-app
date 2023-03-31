
// steps to use redux in react app 
// 1. create store  - only once 
// 2. provide store to react app (in index.js) - only once 
// 3. create slices for compoments - for each component
// 4. invoke slices into components - for each component

// useful links :
// https://redux.js.org/introduction/getting-started
// https://react-redux.js.org/introduction/getting-started
// https://redux-toolkit.js.org/introduction/getting-started


import { configureStore } from '@reduxjs/toolkit';
import writerReducer from './WriterSlice';

export default configureStore({
    reducer: {
        writer: writerReducer
    },
});

