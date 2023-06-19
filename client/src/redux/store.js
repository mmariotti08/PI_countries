  import {createStore ,applyMiddleware, compose,  } from 'redux';
  import rootReducer from "./reducer";
  import thunkMiddleeware from "redux-thunk"

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleeware))
  );

  export default store; 