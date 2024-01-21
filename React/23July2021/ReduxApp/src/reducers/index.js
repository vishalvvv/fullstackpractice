import { combineReducers } from 'redux';
import ProductReducer from './products_reducer'

const rootReducer = combineReducers({
  products: ProductReducer
});

export default rootReducer;
