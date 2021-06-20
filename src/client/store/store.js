import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import booksReducer from '../reducers/books';
import fetchReducer from '../reducers/fetch';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
const initialState = {
    sidebarShow: 'responsive'
  }
   
  const changeState = (state = initialState, { type, ...rest }) => {
    switch (type) {
      case 'set':
        return {...state, ...rest }
      default:
        return state
    }
  }



const store = createStore(
    combineReducers({
        changeState:changeState,
        books: booksReducer,
        fetch: fetchReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
    